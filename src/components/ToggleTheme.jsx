import React from 'react';
import { useDispatch } from 'react-redux';
import { themeChangeAction } from '../redux/reducers/themeReducer';


function ToggleTheme({ themeValue }) {
    const dispatch = useDispatch();
    
    return (
        <div className="toggle-theme">
            <label htmlFor="checkbox_1">
                <input
                    className="toggle-theme__checkbox"
                    type="checkbox"
                    id="checkbox_1"
                    onChange={() => dispatch(themeChangeAction())} 
                    checked={themeValue}
                />
                <div className="toggle-theme__fake-checkbox"></div>
            </label>
        </div>
    )
}

export default ToggleTheme;