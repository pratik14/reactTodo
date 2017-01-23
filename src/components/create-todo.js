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
      <div className="header">
        <form onSubmit={this.createTask.bind(this)}>
          <input className='create' type="text" placeholder="What do I need to do?" ref="createInput"/>
          <button className="addBtn">Create</button>
        </form>
      </div>
    )
  }
};
