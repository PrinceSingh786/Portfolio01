import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Prince Singh. All rights reserved.</p>
        <div className="mt-3">
          <a href="https://github.com/PrinceSingh786" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">LinkedIn</a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">Resume</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
