import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
           
          </span>
          <AiOutlineCopyright/> All Rights Reserved 2024 - <strong> Bera tech Store </strong> - Desenvolvido por 
          <a href="https://beratech.com.br/" target="_blank" rel="BeratechSistemas">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Bera Tech Sistemas
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
