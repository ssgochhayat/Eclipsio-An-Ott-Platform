import React from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { FaPlay } from "react-icons/fa6";

const VideoTitle = ({title,overview}) => {
    return (
        <div className='w-[vw] absolute text-white pt-[18%] p-12'>
            <h1 className='text-3xl font-bold' >{title}</h1>
            <p className='w-1/3 mt-4'>{overview}</p>
            <div className='flex mt-8'>
                <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                    <FaPlay />
                    <span className='ml-1'>Play</span>
                </button>
                <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
                    <CiCircleInfo />
                <span className='ml-1'>Watch more</span>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle