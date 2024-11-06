import React from 'react';
import logo from "../assets/hodlinfo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-300">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-center text-pr text-2xl mb-4 font-bold">H O D L I N F O</h1>

        <ul className="flex justify-center font-bold space-x-6 mb-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-white hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#home" className="text-white hover:text-gray-500">
              Home
            </a>
          </li>
        </ul>

        <div className="flex justify-center space-x-5">
          <a
            href="https://www.instagram.com/subhajitmajumder660/profilecard/?igsh=ejEwcjAyZGV6bGcy"
            className="bg-white text-gray-800 p-2 rounded-md text-xl hover:bg-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/subhajit-majumdar-352967325/"
            className="bg-white text-gray-800 p-2 rounded-md text-xl hover:bg-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/subhajit-majumdar-352967325/"
            className="bg-white text-gray-800 p-2 rounded-md text-xl hover:bg-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="block text-center text-gray-500 text-sm mt-8">
          © Subh-Official. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
