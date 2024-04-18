import React, { useState, useEffect } from 'react';
import zapatilla from '../img/zapatilla.jpg';
import futbol from '../img/futbol.jpg';
import { RxDotFilled } from 'react-icons/rx';

const Categorias = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define el ancho límite para dispositivos móviles
    };
    handleResize(); // Ejecuta la función una vez al inicio para detectar el dispositivo
    window.addEventListener('resize', handleResize); // Agrega el event listener para detectar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Remueve el event listener al desmontar el componente
    };
  }, []);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  const categorias = [
    { image: zapatilla, text: 'Zapatillas' },
    { image: futbol, text: 'Fútbol' },
    { color: '#BF2A2F', text: 'Calzas' },
    { color: '#BF2A2F', text: 'Pelotas' },
  ];

  const transitionStyles = {
    transition: 'opacity 0.5s ease-in-out', // Define la transición de opacidad
  };

  return (
    <div className='max-w-[1600px] mx-auto max-sm:pb-[50px]'>
      <h1 className='text-black uppercase font-bold italic text-[26px] lg:text-[34px] leading-8 pt-10 lg:pt-24 pl-4  pb-4 lg:pl-[72px] lg:pb-10'>Visitá las categorías <br className="md:hidden"/>más populares</h1>
      {isMobile ? (
        <div className='flex flex-col items-center'>
          {categorias[currentIndex].image && (
            <div className="relative w-full" style={transitionStyles}>
              <img className='h-[220px] md:h-[399px] mx-auto w-full object-cover' src={categorias[currentIndex].image} alt={categorias[currentIndex].text} />
              <h2 className='text-white uppercase font-extrabold text-[42px] lg:text-[38px] leading-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{categorias[currentIndex].text}</h2>
            </div>
          )}
          {categorias[currentIndex].color && (
            <div
            className='relative bg-[#BF2A2F] h-[220px] w-[720px]' style={{ backgroundColor: categorias[currentIndex].color, ...transitionStyles }}>
            <h2 className='text-white uppercase font-extrabold text-[44px] lg:text-[38px] leading-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{categorias[currentIndex].text}</h2>
          </div>
          )}
          <div className="absolute flex justify-center items-center mt-2">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                onClick={() => handleCircleClick(index)}
                className={`flex justify-center items-center border border-gray-800 top-[225px] relative ml-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-black' : ''}`}
              >
                <RxDotFilled className={`transition-all fill-none h-[7px] w-[7px] ${currentIndex === index ? 'text-gray-700' : 'text-white'}`} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='lg:flex justify-center lg:gap-3'>
          {/* Contenido para desktop */}
          {/* Primer elemento a la izquierda */}
          <div className='flex lg:flex-col max-md:justify-center max-md:text-center max-md:items-center md:max-lg:hidden relative hover:cursor-pointer transition-transform transform hover:scale-105'>
            <img className='h-[248px] md:h-[399px] md:w-[356px] w-full object-cover' src={zapatilla} alt="Zapatillas" />
            <h2 className='text-white uppercase font-extrabold text-[44px] lg:text-[38px] leading-8 absolute md:bottom-0 md:pl-4 md:pb-6'>Zapatillas</h2>
          </div>
          {/* Elementos del medio */}
          <div className='md:flex flex-col items-center gap-3 hidden'>
            <div className='max-lg:flex relative hidden'>
              <img className='h-[193px] w-[720px] object-cover' src={zapatilla} alt="Zapatillas" />
              <h2 className='text-white uppercase font-extrabold text-[38px] leading-[45px] lg:leading-8 absolute bottom-0 pl-4 pb-6'>Zapatillas</h2>
            </div>
            <div className='md:flex relative hover:cursor-pointer transition-transform transform hover:scale-[1.02]'>
              <img className='h-[193px] w-[720px] object-cover' src={futbol} alt="Fútbol" />
              <h2 className='text-white uppercase font-extrabold text-[38px] leading-[45px] lg:leading-8 absolute bottom-0 pl-4 pb-6'>Fútbol</h2>
            </div>
            <div className='flex relative hover:cursor-pointer transition-transform transform hover:scale-[1.02]'>
              <div className='bg-[#BF2A2F] h-[193px] w-[720px]'></div>
              <h2 className='text-white uppercase font-extrabold text-[38px] leading-8 absolute bottom-0 pl-4 pb-6'>Calzas</h2>
            </div>
            <div className='max-lg:flex relative hidden'>
              <div className='bg-[#BF2A2F] h-[193px] w-[720px]'></div>
              <h2 className='text-white uppercase font-extrabold text-[38px] leading-[45px] lg:leading-8 absolute bottom-0 pl-4 pb-6'>Pelotas</h2>
            </div>
          </div>
          {/* Último elemento a la derecha */}
          <div className='md:flex flex-col max-md:justify-center max-md:text-center max-md:items-center md:max-lg:hidden hidden hover:cursor-pointer transition-transform transform hover:scale-105'>
            <div className='flex relative'>
              <div className='bg-[#BF2A2F] h-[399px] w-[356px]'></div>
              <h2 className='text-white uppercase font-extrabold text-[38px] leading-8 absolute bottom-0 pl-4 pb-6'>Pelotas</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias;