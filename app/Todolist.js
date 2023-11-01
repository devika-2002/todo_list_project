import React from 'react'

const Todolist=(props)=>{
    return (
        <li className="list-item">
            {props.item}
            <span className='icons'>
                <button 
                onClick={()=>{
                    props.deleteItem(props.index)
                }}>Delete</button>
            </span>
        </li>
    )
}
export default Todolist;