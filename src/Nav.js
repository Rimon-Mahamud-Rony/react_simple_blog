import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setsearch}) => {
  return (
    <nav className="w-full h-auto p-2 bg-gray-600">
      <form
        className="w-1/2 ml-2 p-2 grid grid-cols-1 gap-y-3"
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
      <ul className="flex flex-row justify-start items-center mx-auto gap-x-2">
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
    </nav>
  );
}

export default Nav
