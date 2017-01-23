import React from 'react';
import _ from 'lodash';
import List from './list';
import CreateTodo from './create-todo';

const defaultTodoItems = [
  { id: 1, description: 'Buy Choclate', isCompleted: false },
  { id: 2, description: 'Go To Gym', isCompleted: false },
  { id: 3, description: 'Go To Gym1', isCompleted: false },
  { id: 4, description: 'Go To Gym2', isCompleted: false }
]



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: defaultTodoItems,
      filteredItems: defaultTodoItems,
      currentFilter: 'All'
    };
  }

  render() {
    return (
      <div>
        <CreateTodo afterCreate={this.afterCreate.bind(this)}/>
        <List filteredItems={this.state.filteredItems}
          toggleTodo={this.toggleTodo.bind(this)}
          filterTodo={this.filterTodo.bind(this)}
          afterUpdate={this.afterUpdate.bind(this)}
          currentFilter={this.state.currentFilter}/>
      </div>
    )
  }

  afterCreate(todo) {
    todo.id = this.state.todoItems.length + 1
    this.state.todoItems.push(todo)
    this.setState({ todoItems: this.state.todoItems });
  }

  afterUpdate(todo){
    const foundTodo = _.find(this.state.todoItems, item => item.id === todo.id);
    foundTodo.description = todo.description
    return this.setState({ filteredItems: this.state.filteredItems });
  }

  toggleTodo(todo) {
    const foundTodo = _.find(this.state.todoItems, item => item.id === todo.id);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todoItems: this.state.todoItems });
  }

  filterTodo(state){
    this.state.currentFilter = state;
    if(state == 'All'){
      return this.setState({ filteredItems: this.state.todoItems });
    }
    else{
      var todoState = (state == 'Active') ? false : true
      const foundItems = _.filter(this.state.todoItems, item => item.isCompleted === todoState);
      return this.setState({ filteredItems: foundItems });
    }
  }
};
