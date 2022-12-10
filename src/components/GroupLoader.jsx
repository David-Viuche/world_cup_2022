import { useState } from 'react'

export const GroupLoader = () => {
  const [Cant] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  return (
    <>
      {
      Cant.map(el => (
        <div key={el} className='m-5 p-5 border shadow-md max-w-xs w-full animate-pulse flex items-center flex-col gap-2'>
          <div className='w-20 h-4 bg-gray-300 m-2 rounded-xl ' />
          <div className='flex justify-between w-full'>
            <div className='bg-gray-300 h-16 w-24 xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md' />
            <div className='bg-gray-300 h-16 w-24 xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md' />
          </div>
          <div className='flex justify-between w-full'>
            <div className='w-20 h-4 bg-gray-300 mx-3 rounded-xl' />
            <div className='w-20 h-4 bg-gray-300 mx-3 rounded-xl' />
          </div>
          <div className='flex justify-between w-full'>
            <div className='bg-gray-300 h-16 w-24 xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md' />
            <div className='bg-gray-300 h-16 w-24 xs:w-16 xs:h-10 sm:w-28 sm:h-16 shadow-md' />
          </div>
          <div className='flex justify-between w-full'>
            <div className='w-20 h-4 bg-gray-300 mx-3 rounded-xl' />
            <div className='w-20 h-4 bg-gray-300 mx-3 rounded-xl' />
          </div>
        </div>
      ))
    }
    </>
  )
}
