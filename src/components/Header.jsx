import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const headerStyle = {
        backgroundColor: ' #ffd9b3',
        padding: '0.5rem', // Decreased padding to reduce the height
        color: 'white',
        lineHeight: '0.8', // Adjusted lineHeight for better text alignment
        marginBottom: '10px',
    };

    const ulStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
        listStyle: 'none',
    };

    const liStyle = {
        marginRight: '1rem',
    };

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
    };

    return (
        <header style={headerStyle}>
            <nav>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <Link to="/" style={linkStyle}>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
