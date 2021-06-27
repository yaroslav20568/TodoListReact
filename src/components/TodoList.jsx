import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { todoAddAction } from '../redux/reducers/todoReducer';
import TodoItem from './TodoItem';


function TodoList({ todos }) {
    const inputRef = useRef();
    const dispatch = useDispatch();

    function getDate(date) {
        let currentDate = date.toDateString().split(' ');
        return `${currentDate[2]} ${currentDate[1]}`;
    }

    function getTime(date) {
        return `${getZero(date.getHours())}:${getZero(date.getMinutes())}`;
    }

    function getZero(num) {
        if(num < 0 || num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function addTodo() {
        if(inputRef.current.value) {
            // dispatch({type: 'TODO_ADD', payload: {title: inputRef.current.value.charAt(0).toUpperCase() + inputRef.current.value.substr(1).toLowerCase(), isChecked: false, date: getDate(new Date()), time: getTime(new Date())}});
            dispatch(todoAddAction({title: inputRef.current.value.charAt(0).toUpperCase() + inputRef.current.value.substr(1).toLowerCase(), isChecked: false, date: getDate(new Date()), time: getTime(new Date())}));
            inputRef.current.value = '';
        }
    }

    function addTodoFromInput(e) {
        if(e.keyCode === 13) {
            addTodo();
        }
    }
    
    function addTodoFromBtn() {
        if(inputRef.current.value) {
            addTodo();
        }
    }

    return (
        <div className="todo-list show">
            <div className="container">
                <div className="todo-list__inner">
                    <h1 className="todo-list__title">Todo list</h1>

                    <div className="todo-list__add">
                        <input ref={inputRef} onKeyDown={(e) => addTodoFromInput(e)} type="text" placeholder="Enter todo" />
                        <button onClick={() => addTodoFromBtn()}></button>
                    </div>

                    <ul className="todo-list__content">
                        {todos.map((todo, index) => <TodoItem key={`todo_${index + 1}`}  index={index} {...todo} />)}
                    </ul>

                    {
                        todos.length === 0 &&
                        <div className="todo-list__message">
                            <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.571 38.155c3.929-2.38 14-5.714 22.858 0" stroke="#000" strokeWidth="3"/><circle cx="25" cy="25" r="23" stroke="#000" strokeWidth="4"/><ellipse cx="34" cy="17" rx="5" ry="4" fill="#000"/><ellipse cx="33.5" cy="17.5" rx="2.5" ry="1.5" fill="#fff"/><ellipse cx="16" cy="17" rx="5" ry="4" fill="#000"/><ellipse cx="16.5" cy="17.5" rx="2.5" ry="1.5" fill="#fff"/></svg>
                            <h4 className="message__title">Увы, список пуст! Заполните его!</h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;