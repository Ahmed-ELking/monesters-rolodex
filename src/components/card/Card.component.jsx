import React from 'react'

const Card = ({monster}) => {
  return (
    <div className='flex flex-col space-y-4 bg-teal-400 border-solid border-2 border-gray-500 rounded-md shadow-lg shadow-sky-400 antialiased transition-transform ease-out hover:scale-105 p-6 cursor-pointer text-xl font-bold'>
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt='Monster'/>
      <h2>{monster.name}</h2>
      <p className='text-base font-normal'>{monster.email}</p>
    </div>
  )
}

export default Card
