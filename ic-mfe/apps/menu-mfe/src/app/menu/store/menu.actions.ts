import {Action} from '@ngrx/store';

export namespace menuActions {

    export const Types = {
        INCREMENT: '[menu] Increment',
        DECREMENT: '[menu] Decrement',
        RESET: '[menu] Reset'
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

