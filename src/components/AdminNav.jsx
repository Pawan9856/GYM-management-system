import React from 'react';
import { useState } from 'react';

const Navbar = ({active,setActive}) => {

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a
            href="#"
            onClick={() => setActive('allUsers')}
            className={`text-white ${active === 'allUsers' ? 'border-b-2 border-white' : ''}`}
          >
            All Users
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setActive('sendMessages')}
            className={`text-white ${active === 'sendMessages' ? 'border-b-2 border-white' : ''}`}
          >
            Send Messages
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setActive('managePackage')}
            className={`text-white ${active === 'managePackage' ? 'border-b-2 border-white' : ''}`}
          >
            Manage Package
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setActive('createBills')}
            className={`text-white ${active === 'createBills' ? 'border-b-2 border-white' : ''}`}
          >
            Create Bills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
