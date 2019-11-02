import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Guidebar = () => {
    return (
        <div className="catagory">
            <div className="all"><Link to="/dist">Undo</Link></div>
            <div className="finished"><Link to="/finished">Finished</Link></div>
            <div className="deleted"><Link  to="/deleted">Deleted</Link></div>
        </div>
    )
}

export default Guidebar;