import React from 'react';

export default class Item extends React.Component {
  render() {
    const todo = this.props.todo

    const todoStyle = {
      color: todo.isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    return (
      <li style={todoStyle} onClick={ this.handleClick.bind(this, todo) }>
        { todo.description }
      </li>
    )
  }

  handleClick(todo){
    event.preventDefault();
    this.props.toggleTodo(todo);
  }
};
