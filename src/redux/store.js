import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { themeReducer, todoReducer} from './reducers/importReducers';

const rootReducer = combineReducers({
    todos: todoReducer,
    theme: themeReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;