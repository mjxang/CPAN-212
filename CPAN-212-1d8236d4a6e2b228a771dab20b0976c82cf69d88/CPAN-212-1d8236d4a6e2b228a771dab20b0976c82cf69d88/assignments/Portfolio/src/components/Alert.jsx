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
          type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p className={`${
          type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
        } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left flex-auto">{text}</p>
      </div>
    </div>
  );
};
export default Alert