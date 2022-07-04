import React from 'react'

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input className="my-8 w-50 leading-7 caret-gray-500 p-2 outline-0 border-2 border-gray-500 rounded-full focus:border-teal-400" type="search" placeholder={placeholder} 
    onChange={handleChange}
    />
  )
}

export default SearchBox
