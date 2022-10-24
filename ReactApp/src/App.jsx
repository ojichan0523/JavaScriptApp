import React, { useState } from 'react'
import '../css/style.css'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incomplateTodos, setIncomplateTodos] = useState([])
  const [complateTodos, setComplateTodos] = useState(['うううう'])

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodo = [...incomplateTodos, todoText]
    setIncomplateTodos(newTodo)
    setTodoText('')
  }

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos]
    newTodos.splice(index, 1)
    setIncomplateTodos(newTodos)
  }

  const onClickComplate = (index) => {
    const newIncomplateTodos = [...incomplateTodos]
    newIncomplateTodos.splice(index, 1)

    const newConplateTodos = [...complateTodos, incomplateTodos[index]]
    setIncomplateTodos(newIncomplateTodos)
    setComplateTodos(newConplateTodos)
  }

  const onClickBack = (index) => {
    const newConplateTodos = [...complateTodos]
    newConplateTodos.splice(index, 1)

    const newIncomplateTodos = [incomplateTodos, complateTodos(index)]
    setComplateTodos(newConplateTodos)
    setIncomplateTodos(newIncomplateTodos)
  }

  return (
    <>
      <div className='input-area'>
        <input
          placeholder='TODOを入力'
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className='imcomplate-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>

      <div className='complate-area'>
        <p className='title'>完了したTODO</p>
        <ul>
          {complateTodos.map((todo, index) => {
            return (
              <div key='todo' className='list-row'>
                <li>うううう</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}
