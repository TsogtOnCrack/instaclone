import React from 'react';
import Link from 'next/link';

const title = "Instagram"

export const Header = () => {
  return (
    <header className="fixed w-full bg-white border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link href="/">
          <a className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
              <path d="M13.5 11.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="ml-2 font-medium text-lg text-black">{title}</span>
          </a>
        </Link>
        <div>
          <button className="bg-gray-900 text-white font-medium py-2 px-4 rounded-full hover:bg-gray-800">
            Get the app
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;