import React,{memo} from 'react';
import Todo from './Todo';
const TodoList = memo(props=>{
    const {todosList,removeTodo,markCompleted}=props;
    return (
        <section className='main'>
            <ul className='todo-list'>
               {
                   todosList.map(todo=><Todo key={`todo${todo.id}`}{...{todo}}{...{removeTodo}}{...{markCompleted}}></Todo>)
               }
            </ul>        
        </section>
    );
})
export default TodoList;