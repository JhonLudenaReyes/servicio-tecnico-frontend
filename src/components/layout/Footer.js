import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} DevConnect
      </footer>
    </>
  );
};

export default Footer;
