import React from 'react';

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='text-black bg-white p-4 px-10 w-15 text-xl rounded-md hover:bg-opacity-80'> ▶️ Play</button>
            <button className='text-white bg-gray-500 p-4 px-10 w-15 text-xl bg-opacity-50 rounded-md mx-2'> ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
