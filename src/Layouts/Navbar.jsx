import React, { useState } from 'react';
import modernistImage from '../assets/images/home/img_modernist.png';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState('Home'); 

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Profile', href: '#' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={modernistImage} alt="The Modernist" className="h-8 mr-2"/>
        </a>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`p-2 rounded-lg ${activeItem === item.name ? 'bg-[#76c38f] text-white' : 'hover:bg-[#76c38f] text-white'}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Close' : 'Menu'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
