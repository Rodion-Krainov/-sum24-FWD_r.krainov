import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="bg-gray-800 text-white p-4">
                <nav>
                    <ul className="flex justify-between items-center">
                        <li><Link className="text-xl hover:text-gray-300" to="/">Home</Link></li>
                        <li><Link className="text-xl hover:text-gray-300" to="/comic">Comic</Link></li>
                        <li><Link className="text-xl hover:text-gray-300" to="/about">About</Link></li>
                        <li><Link className="text-xl hover:text-gray-300" to="/contact">Contact</Link></li>
                        <li><Link className="text-xl hover:text-gray-300" to="/photos">Photos</Link></li>
                        <li><Link className="text-xl hover:text-gray-300" to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;