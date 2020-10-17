import React, { memo, useState} from 'react';
const Header = memo(props=>{
    const [text,setText] = useState('');
    const {addTodo} = props; 
    const onAddTodo = (e={})=>{
        if(text)
        {
            addTodo(
                {
                    id : new Date().valueOf(),
                    text,
                    isCompleted :false
                }
            )
        }
    }
    return (
        <header className='header'>
            <h2>Danh sách những việc cần làm trong năm</h2>
            <div>
                <input className='name' type="text" placeholder="Title..." 
                value={text}
                onChange ={(e)=>setText(e.target.value)}></input>
                <button type ='submit'className='btnAdd'
                onClick={(e)=>onAddTodo(e)}>Add</button>
            </div>
        </header>
    );
});

export default Header;