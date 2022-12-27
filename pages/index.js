import styles from '../styles/Home.module.css'
import { useState } from 'react'

const mockedTodos = [
  'Posprzątać',
  'Odrobić prace domową',
  'Umyć zęby',
  'Zrobić sprawozdanie z chmur rozproszonych',
  'Pójść na basen',
]

export default function Todos() {
  const [state, setState] = useState(mockedTodos)
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input) {
      setState((prevState) => [...prevState, input])
      setInput('')
    }
  }

  const remove = (valueToRemove) => {
    setState((prevState) =>
      prevState.filter((value) => value !== valueToRemove),
    )
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todo app</h1>
      <div>
        <h2 className={styles.addTodoTitle}>Add new todo</h2>
        <div className={styles.addTodoWrapper}>
          <input
            className={styles.addTodoInput}
            type="text"
            placeholder="Add todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.addTodoBtn} onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
      <div>
        <h2 className={styles.todosTitle}>Todos</h2>
        <div className={styles.todosWrapper}>
          {state.map((todo) => (
            <div className={styles.todoItem} key={todo}>
              <div>{todo}</div>
              <button className={styles.removeBtn} onClick={() => remove(todo)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
