import React, {useState} from 'react';
import TodoList from './components/TodoList';
import ToggleTheme from './components/ToggleTheme';
import todoContext from './context';


function App() {
  let [arrayTodos, setArrayTodos] = useState(JSON.parse(localStorage.getItem('array')) || []);
  const [themeValue, setThemeValue] = useState(JSON.parse(localStorage.getItem('themeValue')) || false);

  function completedTodo(indexTodo) {
    setArrayTodos(
      arrayTodos.map((todo, index) => {
        if(index === indexTodo) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
    localStorage.setItem('array', JSON.stringify(arrayTodos));
  }

  function deleteTodo(indexTodo) {
    arrayTodos = [...arrayTodos.slice(0, indexTodo), ...arrayTodos.slice(indexTodo + 1, arrayTodos.length)];
    setArrayTodos(arrayTodos);
    localStorage.setItem('array', JSON.stringify(arrayTodos));
  }
  
  return (
    <todoContext.Provider value={{completedTodo, deleteTodo}}>
      <div className={themeValue ? 'theme_dark' : 'theme_light'}>
        <TodoList todos={arrayTodos} setTodos={setArrayTodos} />
        <ToggleTheme themeValue={themeValue} setThemeValue={setThemeValue} />
      </div>
    </todoContext.Provider>
  )
}

export default App;