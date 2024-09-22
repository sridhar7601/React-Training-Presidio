import React from 'react';
import { ShoppingCart, User, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">Farmlest!</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-green-600 hover:text-green-800">Home</a></li>
            <li><a href="/store" className="text-gray-600 hover:text-green-600">Store</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-green-600">Contact</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-green-600">About</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="text-gray-600 hover:text-green-600 cursor-pointer" />
          <User className="text-gray-600 hover:text-green-600 cursor-pointer" />
          <Heart className="text-gray-600 hover:text-green-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;