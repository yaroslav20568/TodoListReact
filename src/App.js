import React from 'react';
import TodoList from './components/TodoList';
import ToggleTheme from './components/ToggleTheme';

import { useSelector } from 'react-redux';

function App() {
  const arrayTodos = useSelector(state => state.todos);
  const themeValue = useSelector(state => state.theme);
  
  return (
      <div className={themeValue ? 'theme_dark' : 'theme_light'}>
        <TodoList todos={arrayTodos} />
        <ToggleTheme themeValue={themeValue} />
      </div>
  )
}

export default App;