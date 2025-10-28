import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg py-4">
          &copy; 2025 Prince Singh. All rights reserved.
        </p>
        <div className="mt-2 py-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-2"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
