import { useState, useEffect } from 'react'
import './App.css'
import {TodoProvider} from './contexts'
import { TodoForm , TodoItem } from './components'

function App() {
  
  // passes the empty array bcz we store the all todos items in useTodos
  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos( (prev) => [{id: Date.now() , ...todo}, ...prev])
  }

  // ??????
  const updateTodo = (id , todo) => {
    setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? prevTodo.todo = todo : prevTodo) )
  }


  const removeTodo = (id) => {
    setTodos( (prev) => prev.filter( (todo) => todo.id !== id))
  }


  // if its checks or not 
  const toggleComplete = (id) => {
    setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }


  // the effect is activated by default after the first render and also activate's the effect when any state is changed + or jab tk hum client side render ki baat kar rhe hai jb tk hum localstorage direct use kar skte hai
  
  useEffect( () => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    // check if exists the todos and if is any value or not in todos
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={ {todos , addTodo , removeTodo , updateTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-yellow-400">
        <h1 className="text-3xl font-bold text-center mb-8 mt-2">Manage Your Daily Tasks</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map( (todo) => (
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}

        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
