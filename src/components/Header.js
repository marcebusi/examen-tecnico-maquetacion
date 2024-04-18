import React, { useState } from 'react';
import OpenMenu from "../icons/OpenMenu";
import CloseMenu from "../icons/CloseMenu";
import Search from "../icons/Search";
import Account from "../icons/Account";
import ShoppingCart from "../icons/ShoppingCart";
import Offer from "../icons/Offer";
import MobileMenu from '../components/MenuMobile';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="max-w-[1900px] mx-auto h-[100px] md:h-[135px] md:pt-4 mb-3">
      {open && <div className="fixed inset-0 bg-white z-10" onClick={() => setOpen(false)}></div>}
      <nav className='flex flex-col md:flex-row md:justify-between lg:flex-row md:gap-60 lg:mt-0 lg:mx-28 items-center relative z-20'>
        <h1 className={`font-bold text-[40px] lg:text-3xl text text-[#0F1E7B] hover:cursor-pointer italic tracking-wide ${open ? 'hidden' : 'block'}`}>Mi Tienda</h1>
        <div onClick={() => setOpen(!open)} className={`text-3xl absolute left-7 top-6 cursor-pointer md:hidden z-30 ${open ? 'hidden' : 'block'}`}>
          <OpenMenu />
        </div>
        <div className={`flex items-center gap-6 flex-col-reverse lg:flex-row top-[30px] lg:top-5 lg:flex-grow justify-evenly lg:gap-28 absolute lg:relative ${open ? 'hidden' : 'block'}`}>
          <input className="placeholder-italic placeholder-text-slate-400 block bg-white w-[450px] h-[50px] md:w-[600px] md:h-[40px] items-center border border-[#BABABA] shadow-sm rounded-full pl-5 focus:outline-none focus:border-[#BABABA] focus:ring-[#BABABA] focus:ring-1 sm:text-sm mr-4" placeholder="Busca tus productos favoritos..." type="text" name="search" />
          <div className="absolute pl-28 pb-5">
            <Search />
          </div>
          <div className="flex flex-row gap-6 lg:gap-10 items-center pl-[300px] lg:pl-0">
            <div className="flex items-center relative">
              <Account />
              <a href="#" className="lg:ml-2 lg:block hidden hover:text-black hover:cursor-pointer">Mi cuenta</a>
            </div>
            <ShoppingCart />
          </div>
        </div>
      </nav>
      <div className="lg:flex flex-row gap-8 justify-end pr-60 pt-10 font-medium hidden">
        <a href="#" className='hover:text-black hover:cursor-pointer'>Muebles</a>
        <a href="#" className='hover:text-black hover:cursor-pointer'>Calzado</a>
        <a href="#" className='hover:text-black hover:cursor-pointer'>Colchones</a>
        <a href="#" className='hover:text-black hover:cursor-pointer'>Herramientas</a>
        <div className="flex flex-row gap-2">
          <a href="#" className="text-[#DC1E0F] hover:text-[#491010]">Ofertas</a>
          <Offer />
        </div>
      </div>
      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;