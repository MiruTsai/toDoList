import React from 'react';
import SubItem from './subitem';

const Finished = (finished) => {
    return (
        finished.map(list =>
            <SubItem
                name={list.name}
                key={Math.floor(Math.random() * 1000).toString()}
                id={list.id}
            />
        )
    )
}

export default Finished;