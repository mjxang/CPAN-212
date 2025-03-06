import React from 'react'

const Alert = ({ show, type, text }) => {
  return (
    <div
      className={`fixed top-10 left-0 right-0 flex justify-center items-center ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 ease-in-out`}
    >
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-green-800'
        } p-4 text-white rounded-lg font-medium max-w-md mx-4`}
      >
        {text}
      </div>
    </div>
  );
};

export default Alert