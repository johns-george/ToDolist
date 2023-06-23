import React,{useState} from 'react'
import './app.css'
let arr=['Akash','Alex','Hari','Manoj']
let arr2=['18-08-2001','26-03-2000','04-11-2002','05-07-2001']
const Herosection = () => {
  let [i,seti]=useState(0)
  let [j,setj]=useState(0)
  const changename= ()=>{
    if(i<arr.length-1)
      seti(i=i+1)
      else
      seti(i=0);
    if(j<arr2.length-1)
    setj(j=j+1)
    else
    setj(j=0)
  } 
  return (
    <div id="hero">
     <span>{arr[i]}</span> 
     <span>{arr2[j]}</span>
     <button onClick={changename}  id="btn">Change</button>
    </div>
  )
}

export default Herosection
