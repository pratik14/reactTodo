import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  render() {
    const todo = this.props.todo

    const todoStyle = {
      color: todo.isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    return (
      <li className={ todo.isCompleted ? 'checked' : '' }>
        <input type='checkbox' onClick={ this.handleClick.bind(this, todo) } />
        { this.renderEditForm(todo) }

      </li>
    )
  }

  renderEditForm(todo){
    if(this.state.isEditing){
      return(<input autoFocus defaultValue={ todo.description } ref='editInput' onBlur={ this.collapse.bind(this, todo) } />)
    }
    return(<a onClick={ this.handleEdit.bind(this) }>{ todo.description }</a>);
  }

  collapse(todo){
    this.setState({ isEditing: false });
    const editInput = this.refs.editInput;
    this.props.afterUpdate({ id: todo.id, description: editInput.value })
    this.refs.editInput.value = '';
  }

  handleClick(todo){
    event.preventDefault();
    this.props.toggleTodo(todo);
  }

  handleEdit(){
    this.setState({ isEditing: true });
  }
};
