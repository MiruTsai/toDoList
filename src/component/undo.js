import React from 'react';
import TodoItem from './todoitem';

const Undo = (lists) => {
    return (
        lists.map(list =>
            <TodoItem
                name={list.name}
                key={Math.floor(Math.random() * 1000).toString()}
                id={list.id}
            />
        )
    )
}

export default Undo;