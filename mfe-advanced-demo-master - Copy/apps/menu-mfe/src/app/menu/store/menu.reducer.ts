import {menuActions} from './menu.actions';
import {menuState, initialmenuState} from './menu.state';

export const menu_FEATURE_KEY: string = 'menu';

export function menuReducer(state = initialmenuState, action: menuActions.Actions): menuState {
    switch (action.type) {

        case menuActions.Types.INCREMENT:
            return {
                ...state,
                total: state.total + 1
            };

        case menuActions.Types.DECREMENT:
            return {
                ...state,
                total: state.total - 1
            };

        case menuActions.Types.RESET:
            return initialmenuState;


        default: {
            return state;
        }
    }
}
