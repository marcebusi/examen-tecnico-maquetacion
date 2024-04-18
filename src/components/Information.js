import React, { useState, useEffect } from 'react';
import Bought from '../icons/Bought';
import Payments from '../icons/Payments';
import Shipments from '../icons/Shipments';
import { RxDotFilled } from 'react-icons/rx';

const Information = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Establecer el límite para dispositivos móviles
    };

    handleResize(); // Ejecutar una vez al inicio para detectar el dispositivo
    window.addEventListener('resize', handleResize); // Agregar listener para detectar cambios en el tamaño de la ventana

    return () => {
      window.removeEventListener('resize', handleResize); // Remover listener al desmontar el componente
    };
  }, []);

  // Función para avanzar al siguiente ítem
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === infoItems.length - 1 ? 0 : prevIndex + 1));
  };

  // Establecer el intervalo de tiempo para avanzar automáticamente
  useEffect(() => {
    const interval = setInterval(nextItem, 5000); // Avanzar cada 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  // Array de información para mostrar
  const infoItems = [
    {
      icon: <Bought />,
      title: 'Elegí los productos que\nvas a comprar',
      description: 'Si querés más de uno,\nsumalos a tu\ncarrito.',
    },
    {
      icon: <Payments />,
      title: 'Pagá con el medio de pago\nque quieras',
      description: 'Comprá con seguridad:\nusamos la tecnología de\nMercado Pago.',
    },
    {
      icon: <Shipments />,
      title: 'Recibí el producto que\nesperás',
      description: 'Elegí la forma de entrega\nque prefieras ¡y listo!\nAseguramos tu entrega con\nMercado Envíos.',
    },
  ];

  return (
    <div className='grid lg:grid-cols-3 bg-[#ECECEC] h-[250px] mx-auto text-center pb-5 justify-center mt-[60px] w-full'>
      {isMobile ? (
        <div className='flex flex-col items-center justify-center object-center'>
            <div className='relative'>
          <div className='flex justify-center'>{infoItems[currentIndex].icon}</div>
          <h3 className='uppercase font-extrabold text-[20px] lg:text-[18px] leading-[22px] font-sans'>
            {infoItems[currentIndex].title}
          </h3>
          <p className='text-[#3C3C3B] font-semibold leading-5 text-[18px] lg:text-[16px] pt-2 max-md:pb-12'>
            {infoItems[currentIndex].description.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className='flex relative justify-center w-full'>
            {infoItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCircleClick(index)}
                className={`flex justify-center items-center border border-gray-800 bottom-4 relative ml-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-black' : ''}`}
                >
                  <RxDotFilled className={`transition-all fill-none h-[7px] w-[7px] ${currentIndex === index ? 'text-gray-700' : 'text-white'}`} />
                  </div>
            ))}
          </div>
          </div>
        </div>
      ) : (
        infoItems.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <div>{item.icon}</div>
            <h3 className='uppercase font-extrabold text-[22px] lg:text-[18px] leading-[22px] font-sans'>
              {item.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
            <p className='text-[#3C3C3B] font-semibold leading-5 text-[20px] lg:text-[16px] pt-2'>
              {item.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Information;