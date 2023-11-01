"use client"
import React, { useState } from 'react'
import "./globals.css"
import Todoinput from './Todoinput.js'
import Todolist from './Todolist.js';

const page=()=> {
    const [listTodo,setListTodo]=useState([]);
    let addList = (inputText)=>{
        if(inputText!=='')
        setListTodo([...listTodo,inputText]);
    }

    const deleteListItem = (key)=>{
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }
    
    return (
    <div className="main-container">
        <div className="center-container">
            <Todoinput addList={addList}/>
            {listTodo.map((listItem,i)=>{
            return (
                <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
            })}
        </div>
    </div>
  )
}
export default page;
