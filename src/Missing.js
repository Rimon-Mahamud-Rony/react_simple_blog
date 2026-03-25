import React from 'react'
import { Link } from 'react-router-dom';

function Missing() {
  return (
    <div className="flex flex-col justify-center items-center h-80 w-full">
      <h2 className="text-5xl text-red-700 py-2">Page not found !!</h2>
      <p className="text-slate-500 py-5 text-xl">Well, thats dissapointing.</p>
      <p>
        <Link
          to="/"
          className="border border-green-500 bg-green-100 text-green-600 rounded hover:bg-green-600 hover:text-white px-4 py-2"
        >
          Visit our Homepage
        </Link>
      </p>
    </div>
  );
}

export default Missing
