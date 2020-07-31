import React from 'react';
import Menu from '../../componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/componentes/BannerMain';
import Carousel from '../../componentes/componentes/Carousel';
import Footer from '../../componentes/componentes/Footer';

function Home() {
  return (

    
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Game Play de um jogo de Respeito."}
      />

      <Carousel 

        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

<Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
      
    </div>
  );
}

export default Home;
