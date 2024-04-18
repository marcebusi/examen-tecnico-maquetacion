import React from 'react';
import CloseMenu from "../icons/CloseMenu";
import Offer from "../icons/Offer";

const MobileMenu = ({ isOpen, onClose }) => {
  const handleBodyScroll = () => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  // Ejecutar la función al montar/desmontar el componente
  React.useEffect(() => {
    handleBodyScroll();
    return () => {
      document.body.style.overflowY = 'auto'; // Restaurar el valor por defecto al desmontar el componente
    };
  }, [isOpen]);

  return (
    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-white z-10 overflow-y-auto`} onClick={onClose}>
      <div className="flex flex-row justify-between items-center px-8 h-[90px] pb-6">
        <h1 className="font-bold text-[40px] text-[#0F1E7B] hover:cursor-pointer italic tracking-wide">Mi Tienda</h1>
        <CloseMenu onClick={onClose} className="" />
      </div>
      <hr className="w-full border-r-4 border-black"></hr>
      <div className="flex flex-col items-center h-full pt-10">
        <div>
          <a href="#" className="text-xl text-[#5E5E5E] font-medium hover:text-black">Muebles</a>
          <hr className="w-[400px] border-r border-black my-4"></hr>
          <a href="#" className="text-xl text-[#5E5E5E] font-medium hover:text-black">Calzado</a>
          <hr className="w-[400px] border-r border-black my-4"></hr>
          <a href="#" className="text-xl text-[#5E5E5E] font-medium hover:text-black">Colchones</a>
          <hr className="w-[400px] border-r border-black my-4"></hr>
          <a href="#" className="text-xl text-[#5E5E5E] font-medium hover:text-black">Herramientas</a>
          <hr className="w-[400px] border-r border-black my-4"></hr>
          <div className="flex gap-2 items-center">
            <a href="#" className="text-xl text-[#DC1E0F] font-medium hover:text-[#491010]">Ofertas</a>
            <Offer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;