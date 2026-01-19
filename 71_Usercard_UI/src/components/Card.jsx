import { RiAddCircleFill, RiInstagramLine, RiThreadsLine, RiTwitterXLine } from '@remixicon/react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'


const Card = (props) => {

    console.log(props)
  return (
    <div className='h-[450px] w-[300px] bg-white rounded-2xl p-2 relative shrink-0'>
      <div className='h-[150px] w-full rounded-2xl '> 
        <img className='h-full w-full rounded-2xl ' src={props.data.backgroundImage} alt="" />
        <RiAddCircleFill className='absolute top-[12px] right-[12px] text-5xl h-8 w-8 text-white' />
      </div>
      <div className='h-[130px] w-[130px] absolute top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[conic-gradient(#00695c,#2e7d32,#a3e635,#f59f00,#b45309,white,white,white,white,#d97706,#b91c1c,#6b21a8,#1e3a8a,#00695c)] flex justify-center items-center rounded-full'> 
        <img className='h-[120px] w-[120px] rounded-full object-cover' src={props.data.userImage} alt="" />
      </div>
      <div className='mt-14 text-center '>
        <h1 className='m-1.5 font-bold text-2xl capitalize'>{props.data.name}</h1>
        <p className='font-400 text-gray-600 pl-3 pr-3'>{props.data.desc}</p>
      </div>
      <div className='h-[17%] w-full flex items-center justify-evenly bg-gray-200 rounded-2xl mt-4 border border-gray-300 shadow-lg '>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-xl'>{props.data.likeCount}</h1>
            <h5 className='font-400 text-gray-600 capitalize'>likes</h5>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-xl'>{props.data.postCount}</h1>
            <h5 className='font-400 text-gray-600 capitalize'>posts</h5>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-xl'>{props.data.viewsCount}</h1>
            <h5 className='font-400 text-gray-600 capitalize'>Views</h5>
        </div>
      </div>

      <div className='flex w-[100%] pl-8 pr-8 justify-evenly mt-4 '>
        <RiInstagramLine />
        <RiTwitterXLine />
        <RiThreadsLine />
      </div>

    </div>
  )
}

export default Card
