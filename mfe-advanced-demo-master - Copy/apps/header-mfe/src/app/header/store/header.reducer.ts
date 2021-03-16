import {headerActions} from './header.actions';
import {headerState, initialheaderState} from './header.state';

export const header_FEATURE_KEY: string = 'header';

export function headerReducer(state = initialheaderState, action: headerActions.Actions): headerState {
    switch (action.type) {

        case headerActions.Types.INCREMENT:
            return {
                ...state,
                total: state.total + 1
            };

        case headerActions.Types.DECREMENT:
            return {
                ...state,
                total: state.total - 1
            };

        case headerActions.Types.RESET:
            return initialheaderState;


        default: {
            return state;
        }
    }
}
