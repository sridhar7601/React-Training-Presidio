import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Farmlest!</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Link</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/store" className="hover:underline">Store</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Customer Service</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">South West, USA</p>
            <p className="text-sm mb-2">+000 123 456789</p>
            <div className="flex space-x-4 mt-4">
              <Facebook size={20} className="cursor-pointer" />
              <Twitter size={20} className="cursor-pointer" />
              <Instagram size={20} className="cursor-pointer" />
              <Linkedin size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;