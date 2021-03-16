import {Component} from '@angular/core';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {menuActions} from './store/menu.actions';
import {menuState} from './store/menu.state';
import {menu_FEATURE_KEY} from './store/menu.reducer';

@Component({
    selector: 'app-menu-page',
    templateUrl: './menu-page.component.html',
    styleUrls: ['./menu-page.component.scss']
})
export class menuPageComponent {

    menu$: Observable<menuState>;

    constructor(private store: Store<any>) {
        this.menu$ = this.store.pipe(select(menu_FEATURE_KEY));
    }

    decrement() {
        this.store.dispatch(new menuActions.DecrementAction());
    }

    increment() {
        this.store.dispatch(new menuActions.IncrementAction());
    }

    reset() {
        this.store.dispatch(new menuActions.ResetAction());
    }

}
