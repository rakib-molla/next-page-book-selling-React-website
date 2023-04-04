import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex items-center justify-between bg-gray-100 '>
           <h1>1hr:4min header.jsx</h1>
            {/* logo Section  */}
        <Link to='/' className='inline-flex items-center'>
            <BoltIcon className="h-6 w-6 text-blue-500" />
            <span className='m-2 text-xl font-bold tracking-wide text-gray-800 '>nextPage</span>
        </Link>

            {/* Nav Item Section */}
            <ul className=' items-center hidden space-x-8 lg:flex '>
                <li>
                    <NavLink to='/' className={(isActive)=> (isActive ? 'active' : 'default')}>Home</NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Header;