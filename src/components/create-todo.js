import React from 'react';

export default class CreateTodo extends React.Component {
  createTask(event){
    event.preventDefault();
    const createInput = this.refs.createInput;
    this.props.afterCreate({description: createInput.value, isCompleted: false})
    this.refs.createInput.value = '';
  }

  render() {
    return (
      <div>
        <h3> Add New </h3>
        <form onSubmit={this.createTask.bind(this)}>
          <input type="text" placeholder="What do I need to do?" ref="createInput"/>
          <button>Create</button>
        </form>
      </div>
    )
  }
};
