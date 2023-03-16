import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';



import { Conteiner, TodoList, Input, Button, ListItem, Trash, Check } from "./styles.js"

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState("")



  function inputChange(e) {
    setInput(e.target.value)


  }

  function clickedButton() {

    if (input) {

      setList([...list, { id: uuid(), text: input, finished: false }])

    }

  }


  function endTask(id) {

    const newList = list.map(item => (

      item.id === id ? { ...item, finished: !item.finished } : item

    ))

    setList(newList)

  }

  function deleteTask(id) {

    const novList = list.filter(item => item.id !== id)

    setList(novList)
  }



  return (

    <Conteiner>

      <TodoList>
        <Input onChange={inputChange} type="text" placeholder="Digita a tarefa..." />
        <Button onClick={clickedButton}>Adicionar</Button>

        <ul>
          {

            list.length > 0 ? (

              list.map(item => (

                <ListItem isFiniched={item.finished} key={item.id} >

                  <Trash onClick={() => endTask(item.id)} />

                  <li> {item.text} </li>

                  <Check onClick={() => deleteTask(item.id)} />

                </ListItem>
              ))

            ) : <h3>Não há Tarefas</h3>
          }


        </ul>


      </TodoList>

    </Conteiner>

  )
}

export default App
