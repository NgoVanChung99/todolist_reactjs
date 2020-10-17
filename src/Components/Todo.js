import React, { memo } from 'react';
const Todo = memo(props => {
    const { todo,removeTodo,markCompleted } = props;
    return (
        <li>
            <div className='todo'>
                <input
                  className='check' 
                  type='checkbox' 
                  checked={todo.isCompleted}
                ></input>
                <a
                  onClick={() => markCompleted(todo.id)}
                  className={`${todo.isCompleted ? 'completed':''} action`}
                  >{todo.text}
                  </a>
                <button onClick={()=>removeTodo(todo.id)} className='btnDelete'><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>
    );
})
export default Todo;