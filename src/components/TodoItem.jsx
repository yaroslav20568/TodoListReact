import React from 'react';
import { useDispatch } from 'react-redux';
import { todoCompleteAction, todoDeleteAction } from '../redux/reducers/todoReducer';


export default function TodoItem({index, title, isChecked, date, time}) {
    const dispatch = useDispatch();
    
    return (
        <div className="todo">
            <div className="todo__enumaration">{`${index + 1}.`}</div>
            <label className="todo__label" htmlFor={`checkbox${index + 1}`}>
                <input
                    className="todo__checkbox"
                    type="checkbox"
                    id={`checkbox${index + 1}`}
                    onChange={() => dispatch(todoCompleteAction(index))}
                    checked={isChecked}
                />
                <div className="todo__fake-checkbox"></div>
            </label>
            <div className="todo__title">{title}</div>
            <div className="todo__date">{date}</div>
            <div className="todo__time">{time}</div>
            <div className="todo__delete" onClick={() => dispatch(todoDeleteAction(index))}></div>
        </div>
    )
}