import React from 'react';
import _ from 'lodash';
import List from './list';
import CreateTodo from './create-todo';

const defaultTodoItems = [
  { id: 1, description: 'Buy Choclate', isCompleted: true },
  { id: 2, description: 'Go To Gym', isCompleted: true },
  { id: 3, description: 'Go To Gym1', isCompleted: true },
  { id: 4, description: 'Go To Gym2', isCompleted: true }
]



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: defaultTodoItems,
      filteredItems: defaultTodoItems
    };
  }

  render() {
    return (
      <div>
        <CreateTodo afterCreate={this.afterCreate.bind(this)}/>
        <List filteredItems={this.state.filteredItems} toggleTodo={this.toggleTodo.bind(this)} filterTodo={this.filterTodo.bind(this)}/>
      </div>
    )
  }

  afterCreate(todo) {
    todo.id = this.state.todoItems.length + 1
    this.state.todoItems.push(todo)
    this.setState({ todoItems: this.state.todoItems });
  }

  toggleTodo(todo) {
    const foundTodo = _.find(this.state.todoItems, item => item.id === todo.id);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todoItems: this.state.todoItems });
  }

  filterTodo(state){
    if(state == 'All'){
      return this.setState({ filteredItems: this.state.todoItems });
    }
    else{
      const foundItems = _.filter(this.state.todoItems, item => item.isCompleted === state);
      return this.setState({ filteredItems: foundItems });
    }
  }
};
