import {Action} from '@ngrx/store';

export namespace headerActions {

    export const Types = {
        INCREMENT: '[header] Increment',
        DECREMENT: '[header] Decrement',
        RESET: '[header] Reset'
    };

    export class IncrementAction implements Action {
        readonly type = Types.INCREMENT;

        constructor() {}
    }

    export class DecrementAction implements Action {
        readonly type = Types.DECREMENT;

        constructor() {}
    }

    export class ResetAction implements Action {
        readonly type = Types.RESET;

        constructor() {}
    }

    export type Actions =
        IncrementAction
        | DecrementAction
        | ResetAction;


}

