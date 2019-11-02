import React from 'react';

const SubItem = (props) => {
    return (
      <div className='todoItem'>
        <div className='SubItem'>{props.name}</div>
      </div>
    );
  };

  export default SubItem;