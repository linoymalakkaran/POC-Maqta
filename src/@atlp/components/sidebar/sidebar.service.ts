import { Injectable } from '@angular/core';

import { AtlpSidebarComponent } from './sidebar.component';

@Injectable({
    providedIn: 'root'
})
export class AtlpSidebarService {
    // Private
    private _registry: { [key: string]: AtlpSidebarComponent } = {};

    /**
     * Constructor
     */
    constructor() {

    }

    /**
     * Add the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */
    register(key, sidebar): void {
        // Check if the key already being used
        if (this._registry[key]) {
            console.error(`The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`);

            return;
        }

        // Add to the registry
        this._registry[key] = sidebar;
    }

    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */
    unregister(key): void {
        // Check if the sidebar exists
        if (!this._registry[key]) {
            console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);
        }

        // Unregister the sidebar
        delete this._registry[key];
    }

    /**
     * Return the sidebar with the given key
     *
     * @param key
     * @returns {AtlpSidebarComponent}
     */
    getSidebar(key): AtlpSidebarComponent {
        // Check if the sidebar exists
        if (!this._registry[key]) {
            console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);

            return;
        }
        // Return the sidebar
        return this._registry[key];
    }

    /**
     * Refrash z-index for all open sidebars with superimposed = true
     */
    refrashIndex(): void {
        this.allOpenedSuperimposedSidebar.forEach((nameSidebar, index) => {
            this.getSidebar(nameSidebar).setIndex(1000 + index);
            this.getSidebar(nameSidebar).addClassSuperimposedSidbar(index);
            if (index === this.allOpenedSuperimposedSidebar.length - 1){ 
                this.getSidebar(nameSidebar).addClassActiveSidbar();
            } else {
                this.getSidebar(nameSidebar).removeClassActiveSidbar();
            }
        });
    }

    /**
     * Return all sidebars superimposed = true
     */
    get allOpenedSuperimposedSidebar(): string[] {
        return Array.from(Object.values(this._registry))
          .filter((sidebar) => {
            return sidebar.opened !== false && sidebar.superimposed !== false;
          })
          .sort((prev, next) => {
            return prev.timeOpened - next.timeOpened;
          })
          .map((sidebar) => {
            return sidebar.name;
          });
    }
}
