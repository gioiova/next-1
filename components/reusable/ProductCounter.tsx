'use client'

import React, { useState } from 'react'
const ProductCounter = () => {

    const [count,setCount ] = useState(1);
  return (
    <div className="flex sm:items-center sm:justify-center w-full">
    <button onClick={() => setCount(count -1 )}
        className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
            <h2 className='text-black'>-</h2>
    </button>
    <input type="text"
        className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
        placeholder="1"
        value={count}/>
    <button  onClick={() => setCount(count +1 )}
        className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
       <h2 className='text-black'>+</h2>
    </button>
</div>  )
}

export default ProductCounter