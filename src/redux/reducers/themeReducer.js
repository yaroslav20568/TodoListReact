import THEME_CHANGE from '../actions/themeAction';

let themeValue = false;

export default function themeReducer(state = themeValue, action) {
    switch (action.type) {
        case THEME_CHANGE:
            return !themeValue;
            break;
    
        default:
            return state;
    }
}

export const themeChangeAction = () => ({type: THEME_CHANGE});