import React from 'react';
import './app.css';
import {useState} from 'react'
function App() {
  const [ToDos,setToDos]=useState([])
  const [ToDo,setToDo]=useState('')
  const date=Date()
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...ToDos,{text:ToDo,status:false,id:Date.now()}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { ToDos.map((obj)=>{
        if(obj.text==""){
return
        }
        else{
       return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(ToDos.filter((obj2)=>{
                if(obj2.id===obj.id)
                {
                  obj2.status=e.target.checked;
                }
                return obj2;
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>setToDos(ToDos.filter((obj3)=>{
              if(obj3.id!==obj.id)
              {
                return obj3
              }
              return null
            }))} className="fas fa-times"></i>
          </div>
        </div>);}})}
      </div>
      <div className="tasks">
      <div className="cd"><h1>COMPLETED TASKS</h1>
      { ToDos.map((obje)=>{
        if(obje.text==""){
          return
        }
        if(obje.status)
         {
           return(
             <ul>
             <li>{obje.text}</li>
             </ul>
              );
         }
         return null;
       })
       }</div>
               <div className="ab"><h1>ACTIVE TASKS</h1>
               { ToDos.map((obje)=>{
                if(obje.text==""){
          return
        }
         if(!(obje.status))
         {
           return(
             <ul>
             <li>{obje.text}</li>
             </ul>
              );
         }
         return null;
       })
       }</div>
               </div>
      
    </div>
  );
}

export default App;