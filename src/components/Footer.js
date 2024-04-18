import React from "react";
import Location from "../icons/Location";
import Pierce from "../icons/Pierce";
import vtex from "../img/vtex.png";
import dataFiscal from "../img/dataFiscal.jpg";

const Footer = () => {
  return (
    <footer className="bg-black w-full h-full lg:h-[360px] max-md:relative">
      <div className="max-md:flex max-md:flex-col max-md:text-center max-md:items-center mx-auto w-full h-full max-w-[1600px] p-4 py-6 lg:py-8 max-md:pt-28">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 pt-6 pb-6 lg:pb-14">
            <ul className="text-white uppercase font-medium pb-10 max-md:flex max-md:flex-col max-md:gap-3">
              <li>
                <a className="text-white hover:underline">Condiciones</a>
              </li>
              <li>
                <a className="text-white hover:underline">Trabaja con nosotros</a>
              </li>
              <li>
                <a className="text-white hover:underline">Medios de pago</a>
              </li>
              <li>
                <a className="text-white hover:underline">Preguntas frecuentes</a>
              </li>
            </ul>
            <button className="border border-white uppercase text-white h-10 w-[194px] text-xs hover:bg-gray-800">Botón de arrepentimiento</button>
          </div>
          <div className="text-center flex justify-center items-center">
            <h1 className="font-bold text-3xl hover:cursor-pointer font-style: italic tracking-wide text-white max-md:absolute max-md:top-14 max-md:text-[34px]">Mi Tienda</h1>
          </div>
          <div>
            <div className="relative flex flex-col justify-between lg:pt-6 pt-0">
              <Location />
              <h2 className="pb-6 leading-6 text-[16px] font-semibold uppercase text-white lg:pl-10">Sucursales</h2>
            </div>
            <ul className="lg:pt-2 pt-6">
              <li>
                <a href="#" className="text-white hover:underline text-[15px]">Whatsapp 2215137270 </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline text-[15px]">ecommerce@mateu.com.ar</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline text-[15px]">La Plata 1900, Buenos Aires, Argentina</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-between max-md:pt-11 flex sm:items-center sm:justify-between">
          <div className="flex flex-row lg:flex-row lg:gap-4 gap-2 justify-end items-center">
            <a className="text-[13px] hover:underline hover:cursor-pointer text-white">Powered by Pierce commerce</a>
            <div className="flex items-center lg:gap-6">
              <Pierce />
              <div className="flex items-center">
                <img src={vtex} className="h-[24px] lg:h-[19px] lg:w-[51px] object-cover max-md:absolute max-md:bottom-10 max-md:right-[150px] max-md:hidden" alt="VTEX logo" />
              </div>
            </div>
          </div>

          <div className="flex justify-between flex-col lg:flex-row lg:justify-end max-md:items-center lg:pt-4 pt-6 gap-8 lg:gap-10">
            <p className="text-white text-[13px]">© 2023 MateuSports</p>
            <img src={dataFiscal} className="lg:h-[37px] lg:w-[29-px] w-[32px] h-[46px] max-md:hidden" />
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 space-x-1 md:hidden">
            <img src={dataFiscal} className="w-[32px] h-[46px]" alt="DataFiscal logo" />
            <div className="w-4" />
            <img src={vtex} className="h-[24px] object-cover" alt="VTEX logo" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;