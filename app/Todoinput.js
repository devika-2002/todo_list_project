"use client"
import React,{useState} from "react";

const TodoInput=(props)=>{
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode==="Enter"){
            props.addList(inputText)
            setInputText("")
        }
    }
    return (
        <div className="input-container"> 
            <input 
                className="input-text"
                type="text"
                placeholder="Enter your todo"
                value={inputText}
                onChange={e=>{
                    setInputText(e.target.value)
                }}
                onKeyDown={handleEnterPress}
            />
        
            <button className="add-btn" 
            onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }}>Add</button>       
        </div>
        
    );
}
export default TodoInput;
