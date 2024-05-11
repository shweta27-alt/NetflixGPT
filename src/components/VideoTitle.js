import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='text-white bg-gray-500 p-4 px-10 w-15 text-xl bg-opacity-50 rounded-md'> ▶ Play</button>
            <button className='text-white bg-gray-500 p-4 px-10 w-15 text-xl bg-opacity-50 rounded-md mx-2'> ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
