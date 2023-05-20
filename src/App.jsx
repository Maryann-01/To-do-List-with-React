// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { FaEdit,FaTrash } from "react-icons/fa";


function App() {
  // const [count, setCount] = useState(0)
  const [newItem,setNewItem]=React.useState("");
   const displayItems=(e)=>{
       setNewItem(e.target.value)
   }
   const [items,setItem]=React.useState([])
   const handleButtonClick=()=>{
    if (!newItem){
      alert("Please create a new Item")
      return;
    }
    else{
      const item = {
              id: Math.floor(Math.random() * 1000),
              value: newItem,
            };
      setItem((oldArray)=>[...oldArray,item])
      setNewItem("")
    }
    }
    const handleDelete=(id)=>{
      const del=items.filter((item)=>item.id!==id)
      setItem(del)
    }
    const [updatedText, setUpdatedText] =React.useState("");
    const editItem=(id,newText)=>{
        const val=items.filter((item)=>item.id===id)
        const newVals={
          id:val.id,
          myText:newText
        }
    setUpdatedText("")
    }

  return (
    <section className="main">
       <h1 className="header"> What's the plan for today?</h1>
       <div className="box">
         <input type="text" name="inputTag" className="input" onChange={displayItems} value={newItem} placeholder="Enter a Todo.."/>
         <div>
      {/* Add button */}
            <button onClick={handleButtonClick} className="submit-btn">Submit</button>
              <ol>{items.map((item)=>{
               return (
                <div className="list-check">
                  <input type="checkbox" key={item.id} className="input-field1" />
                  <li key={item.id} className="li">{item.value}</li>
                  <div className="subsection">
                     <FaTrash onClick={() =>handleDelete(item.id)}/>
                     {/* {showEdit == item.id ? (
                       <div>
                         <input type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)}/>
                         <FaEdit onClick={() => editItem(item.id, updatedText)}/>
                       </div>
                     ) : null} */}
                     <FaEdit onClick={() => editItem(item.id, updatedText)}/>
                  </div>
              </div>
              )
            })}
            </ol>
          </div>
        </div>
    </section>
  )
}

export default App
