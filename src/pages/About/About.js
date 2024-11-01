import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Quem Somos" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          Aqui na <span className="text-primeColor font-semibold text-lg ">Bera Tech Store</span>{" "}
          nós somos comprometidos em oferecer os melhores produtos sempre com aquele preço especial que cabe no seu bolso, tudo 
          isso alinhado com um bom atendimento ao cliente, onde priorizamos sempre a satisfação dos nossos consumidores. Surgimos 
          pela paixão e pelo desejo de conectar as pessoas com o que há de melhor sem a necessidade de sair de casa. Levamos com 
          a comodidade de comprar com a apenas um clique todas as tendências mundiais para o conforto do seu lar.<br></br><br></br>   
          Nós somos apaixonados pelo o que fazemos! Temos uma equipe treinada e direcionada para sempre atualizarmos nossos estoques 
          com o que há de mais recente e sofisticado no cenário mundial. Buscamos produtos selecionados e fornecedores para proporcionar
          aos nossos clientes o melhor preço. <br></br><br></br>   
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Ver categorias
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
