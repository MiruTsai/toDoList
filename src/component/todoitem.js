import React from 'react';

const TodoItem = (props) => {
    return (
      <div className='todoItem'>
        <button type="button" onClick={() => props.finishItem(props.id)}>√</button>
        <div className='item' key={Math.floor(Math.random()*1000)} id={props.id}>{props.name}</div>
        <button type="button" onClick={() => props.removeItem(props.id)}>✖</button>
      </div>
    );
  };

  export default TodoItem;