import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { themeReducer, todoReducer} from './reducers/importReducers';

const rootReducer = combineReducers({
    todos: todoReducer,
    theme: themeReducer
});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
    localStorage.setItem('array', JSON.stringify(store.getState().todos));
    localStorage.setItem('themeValue', store.getState().theme);
});

export default store;