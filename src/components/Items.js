import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RxDotFilled } from 'react-icons/rx';
import Button from '../components/Button'
import lavarropas from '../img/lavarropas.png';

const Items = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1740);
  const cardLimit = isMobile ? 2 : 5;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1740); // Actualizar isMobile cuando se cambie el tamaño de la ventana
    };
    window.addEventListener('resize', handleResize); // Escuchar cambios de tamaño de ventana
    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el event listener en el desmontaje
    };
  }, []);

  const products = [
    {
      image: lavarropas,
      product_title: 'Samsung\nSmart Tv 75" UHD',
      price: '$ 1.100.999',
    },
    {
      image: lavarropas,
      product_title: 'Samsung\nSmart Tv 80" UHD',
      price: '$ 1.200.999',
    },
    {
      image: lavarropas,
      product_title: 'Samsung\nSmart Tv 85" UHD',
      price: '$ 1.300.999',
    },
    {
      image: lavarropas,
      product_title: 'Samsung\nSmart Tv 90" UHD',
      price: '$ 1.600.999',
    },
    {
      image: lavarropas,
      product_title: 'Samsung\nSmart Tv 65" UHD',
      price: '$ 1.100.999',
    },
  ];

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? products.length - cardLimit : currentIndex - cardLimit);
  };
  
    const nextSlide = () => {
        setCurrentIndex(currentIndex === products.length - cardLimit ? 0 : currentIndex + cardLimit);
  };

  return (
    <div className='w-full bg-[#DC1E0F] p-6 mt-10 lg:mt-20 relative h-[400px] lg:h-[600px]'>
      <div className='max-w-[1600px] mx-auto'>
        <h1 className='text-white uppercase font-bold italic text-[26px] lg:text-[36px] leading-8 pt-2 lg:pl-16'>Tendencias</h1>
        <div className="flex justify-center items-center pt-10">
          <div className="flex">
            {products.slice(currentIndex, currentIndex + cardLimit).map((product, index) => (
              <div key={index} className={`transition-transform transform ml-5`}>
                <div className="bg-white w-[180px] h-[250px] lg:w-[280px] lg:h-[436px] rounded-2xl lg:rounded-md text-center border border-gray-300 relative shadow-lg shadow-white/5">
                  <div className="flex justify-center items-center pt-4 lg:pt-8">
                    <img className='h-[99px] w-[99px] lg:h-[188px] lg:w-[188px]' src={product.image} alt={`Lavarropas ${index}`} />
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="text-[12px] lg:text-[16px] whitespace-pre-line text-[#5E5E5E] font-semibold pt-3 pb-2 lg:py-2">{product.product_title}</h3>
                    <p className="text-black opacity-70 text-[16px] lg:text-[24px] font-bold py-2 lg:py-5">{product.price}</p>
                      <Button />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isMobile ? ( // Renderizar puntos de navegación en dispositivos móviles
            <div className="flex absolute bottom-2 left-0 right-0 justify-center">
              {products.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`flex justify-center items-center border border-white relative ml-3 rounded-full cursor-pointer ${currentIndex === i ? 'bg-white' : ''}`}
              >
                <RxDotFilled className={`transition-all fill-none h-[8px] w-[8px] ${currentIndex === i ? 'text-white' : 'text-white'}`} />
                </div>
              ))}
            </div>
          ) : ( // Renderizar botones de navegación en pantallas más grandes
            <>
              <button className="transform -translate-y-1/2 bg-gray-200 h-[36px] w-[36px] rounded-full flex justify-center items-center absolute left-[204px] hover:scale-125 transition" onClick={prevSlide}>
                <FiChevronLeft className='size-6'/>
              </button>
              <button className="transform -translate-y-1/2 bg-gray-200 h-[36px] w-[36px] rounded-full flex justify-center items-center absolute right-[180px] hover:scale-125 transition" onClick={nextSlide}>
                <FiChevronRight className='size-6'/>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;