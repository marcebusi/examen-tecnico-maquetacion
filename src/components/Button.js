import React from 'react'

const Button = () => {
  return (
    <button className="h-[22px] w-[80px] lg:h-[33px] lg:w-[117px] relative overflow-hidden bg-gray-200 text-[#DC1E0F] font-medium lg:pb-1 border-[#DC1E0F] border min-w-max sm:w-max lg:px-6 rounded-full outline-none transition duration-300 ease-linear hover:bg-red-900 hover:text-white hover:border-black">
    <span className="relative font-medium text-[12px] lg:text-[16px] flex justify-center z-10">Comprar</span>
    <span className="absolute inset-0 bg-red-900 opacity-0 scale-0 origin-center transition duration-300 ease-linear rounded-full after:absolute after:inset-0 after:opacity-70 after:scale-100 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:bg-red-900 group-hover:opacity-100 group-hover:scale-[2.5]"></span>
  </button>
  )
}

export default Button