import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    return (
        <div>
            <h3 style={style}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></h3>
            <h3 style={style}><Link to='/jokes' style={{ textDecoration: 'none' }}>Jokes</Link></h3>
        </div>
    )
}

export default Header;