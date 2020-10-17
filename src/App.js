import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './CSS/TodoList.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import './Font/css/all.css';
class App extends React.PureComponent {
  state = {
    todosList: [
      {
        id: 1,
        text: 'Xin việc ở Google',
        isCompleted: true
      },
      {
        id: 2,
        text: 'Mua biệt thự',
        isCompleted: true
      },
       {
        id: 3,
        text: 'Cưới vợ',
        isCompleted: false
      },
       {
        id: 4,
        text: 'Mua xe hơi',
        isCompleted: false
      },
       {
        id: 5,
        text: 'Sinh con',
        isCompleted: false
      },
       {
        id: 6,
        text: 'Đi du lịch vòng quanh thế giới',
        isCompleted: false
      },
    ]
  }
  addTodo = (todo = {}) => {
    this.setState(preState => ({
      todosList: [...preState.todosList, todo]
    }))
  }
  markCompleted = (id = '') => {
    this.setState(preState => ({
      todosList: preState.todosList.map(todo => todo.id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo)
    }))
  }
  removeTodo = (id = '') => {
    const { todosList } = this.state;
    this.setState({
      todosList: todosList.filter(todo => todo.id !== id)
    })
  }
  render() {

    const { todosList } = this.state;
    return (
      <div className="App">
        <Header addTodo={this.addTodo}></Header>
        <br></br>
        <TodoList todosList={todosList}
          markCompleted={this.markCompleted}
          removeTodo={this.removeTodo}
        ></TodoList>
      </div>
    )
  }
}
export default App;
