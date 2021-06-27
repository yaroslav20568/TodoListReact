import { TODO_ADD, TODO_COMPLETE, TODO_DELETE } from '../actions/todoAction';

let arrayTodos = JSON.parse(localStorage.getItem('array')) || [];

export default function todoReducer(state = arrayTodos, action) {
    switch (action.type) {
        case TODO_ADD:
            return [...state, action.payload];
            break;
        
        case TODO_COMPLETE:
            return state.map((todo, index) => {
                if(action.payload === index) {
                    todo.isChecked = !todo.isChecked;
                }
                return todo;
            });
            break;
        
        case TODO_DELETE:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1, state.length)]
            break;

        default:
            return state;
    }
}

export const todoAddAction = (payload) => ({type: TODO_ADD, payload: payload});
export const todoCompleteAction = (payload) => ({type: TODO_COMPLETE, payload: payload});
export const todoDeleteAction = (payload) => ({type: TODO_DELETE, payload: payload});