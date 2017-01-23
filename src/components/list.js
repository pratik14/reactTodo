import React from 'react';
import Item from './item';


export default class List extends React.Component {
  render() {
    const { filteredItems, toggleTodo, afterUpdate, currentFilter } = this.props

    return (
      <div>
        <ul>
          {filteredItems.map(function(todo, i){
            return <Item todo={todo} toggleTodo={toggleTodo} key={todo.id} afterUpdate={ afterUpdate.bind(this) }/>
          })}
        </ul>
        <div className='filter'>
          <div className={ currentFilter == 'Completed' ? 'selected' : ''   }><a onClick={ this.handleClick.bind(this, 'Completed') }>Completed</a></div>
          <div className={ currentFilter == 'Active' ? 'selected' : ''  }><a onClick={ this.handleClick.bind(this, 'Active') }>Active</a></div>
          <div className={ currentFilter == 'All' ? 'selected' : ''  }><a onClick={ this.handleClick.bind(this, 'All') }>All</a></div>
        </div>
      </div>
    )
  }

  handleClick(state){
    this.props.filterTodo(state)
  }
};
