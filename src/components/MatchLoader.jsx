import { useState } from 'react'

export const MatchLoader = () => {
  const [Cant] = useState([1, 2, 3])

  return (
    <>
      {
    Cant.map(el => (
      <div key={el} className='flex flex-col items-center shadow-md p-4 w-80 h-56 animate-pulse'>
        <div className='w-40 h-4 bg-gray-300 m-2 rounded-xl ' />
        <div className='flex justify-between w-full'>
          <div className='bg-gray-300 h-16 w-28 xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md' />
          <div className='bg-gray-300 h-16 w-28 xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md' />
        </div>
        <div className='flex justify-between w-full'>
          <div className='w-20 h-4 bg-gray-300 m-3 rounded-xl' />
          <div className='w-20 h-4 bg-gray-300 m-3 rounded-xl' />
        </div>
        <div className='flex justify-between w-full items-center'>
          <div className='w-36 h-4 bg-gray-300 m-3 rounded-xl' />
          <div className='w-20 h-6 bg-gray-300 m-3 rounded-xl' />
        </div>
      </div>
    ))
  }
    </>
  )
}
