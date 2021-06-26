import React from 'react';


function ToggleTheme({themeValue, setThemeValue}) {
    function themeChange() {
        setThemeValue(themeValue = !themeValue);
        localStorage.setItem('themeValue', themeValue);
    }

    return (
        <div className="toggle-theme">
            <label htmlFor="checkbox_1">
                <input
                    className="toggle-theme__checkbox"
                    type="checkbox"
                    id="checkbox_1"
                    onChange={themeChange.bind(null)} 
                    checked={themeValue}
                />
                <div className="toggle-theme__fake-checkbox"></div>
            </label>
        </div>
    )
}

export default ToggleTheme;