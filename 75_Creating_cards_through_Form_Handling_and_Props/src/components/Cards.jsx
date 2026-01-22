import React from 'react'

const Cards = (props) => {
  return (
    <div className=' w-[400px] bg-gray-500 flex flex-col items-center justify-center p-4 rounded-xl m-5 '>
      <img className='h-[180px] w-[180px] object-cover object-center rounded-[50%]' src={props.elem.image} alt="" />
      <h1 className='font-extrabold text-3xl m-2'>{props.elem.name}</h1>
      <h2 className='font-bold text-white text-xl'>{props.elem.role}</h2>
      <p className='text-base font-semibold p-3 text-center'>{props.elem.desc}
      </p>
      <button onClick={()=>{
        props.delete(props.idx)
      }} className='bg-red-500 p-3 w-[30%] active:scale-95 text-white rounded-2xl border font-bold text-xl mt-2 cursor-pointer'>Delete</button>
    </div>
  )
}

export default Cards
