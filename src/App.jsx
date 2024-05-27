/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTodos(data.todos))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const addTodo = async () => {
    try {
      const response = await fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: newTodo }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTodos(data.todos);
      setNewTodo('');
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const deleteTodo = async (index) => {
    try {
      const response = await fetch(`/todos/${index}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <Fragment>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New To-Do"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;

