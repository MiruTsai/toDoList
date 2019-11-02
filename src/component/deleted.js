import React from 'react';
import SubItem from './subitem';

const Deleted = (deleted) => {
    return (
        deleted.map(list =>
            <SubItem
                name={list.name}
                key={Math.floor(Math.random() * 1000).toString()}
                id={list.id}
            />
        )
    )
}

export default Deleted;