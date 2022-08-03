import React,{useState} from 'react';
import './App.css';
import InputArea from './componennt/InputArea';
import ToDoItem from './componennt/ToDoItem';

function App() {
  const [items,setItems]= useState([]);

  const addItems = (inputText)=>{
    setItems((prevItems)=>{
      return[...prevItems, inputText];
    })
  }
  const deleteItem = (id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index) => {
        return index !== id;
      })
    })

  }
  return (
    <div className='container'>
      <div className='heading'>
        <h1>To Do List</h1>
      </div>
      <InputArea onAdd={addItems} />
      {items.map((item,index) =>(
        <ToDoItem key = {index} id={index} text={item} onChecked={deleteItem} />
      ))}
    </div>
  );
}

export default App;

