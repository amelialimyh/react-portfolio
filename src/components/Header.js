import React from 'react';
import { Link } from 'react-router-dom';

// higher order component needs a component as its input so we are going to assume that that component is coming down through props object
const Header = ({ children }) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    return (
        <div>
            <div>
                <h3 style={style}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></h3>
                <h3 style={style}><Link to='/jokes' style={{ textDecoration: 'none' }}>Jokes</Link></h3>
                <h3 style={style}><Link to='/music-master' style={{ textDecoration: 'none' }}>Music Master</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;
