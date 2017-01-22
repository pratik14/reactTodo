import React from 'react';
import Item from './item';


export default class List extends React.Component {
  render() {
    const { filteredItems, toggleTodo } = this.props

    return (
      <div>
        <h3> Todo List </h3>
        <div>
          <a onClick={ this.handleClick.bind(this, 'All') }>All</a>
          <a onClick={ this.handleClick.bind(this, false) }>Active</a>
          <a onClick={ this.handleClick.bind(this, true) }>Completed</a>
        </div>
        <ul>
          {filteredItems.map(function(todo, i){
            return <Item todo={todo} toggleTodo={toggleTodo} key={todo.id}/>
          })}
        </ul>

      </div>
    )
  }

  handleClick(state){
    this.props.filterTodo(state)
  }
};
