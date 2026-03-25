import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setsearch}) => {
  return (
    <div className="w-full  flex flex-col sm:flex-row h-auto px-8 py-4 gap-y-4 bg-gray-600">
      <nav className="w-full ">
        <form
          className="w-full sm:w-1/2 grid grid-cols-1 gap-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search" className="text-white text-xl">
            Search posts
          </label>
          <input
            className="p-2 border bg-white rounded-md"
            id="search"
            type="text"
            placeholder="search post"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </form>
      </nav>
      <ul className="w-full flex flex-row justify-start sm:justify-end items-center gap-x-2">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/post">Post</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav
