import {Component} from '@angular/core';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {headerActions} from './store/header.actions';
import {headerState} from './store/header.state';
import {header_FEATURE_KEY} from './store/header.reducer';

@Component({
    selector: 'app-header-page',
    templateUrl: './header-page.component.html',
    styleUrls: ['./header-page.component.scss']
})
export class headerPageComponent {

    header$: Observable<headerState>;

    constructor(private store: Store<any>) {
        this.header$ = this.store.pipe(select(header_FEATURE_KEY));
    }

    decrement() {
        this.store.dispatch(new headerActions.DecrementAction());
    }

    increment() {
        this.store.dispatch(new headerActions.IncrementAction());
    }

    reset() {
        this.store.dispatch(new headerActions.ResetAction());
    }

}
