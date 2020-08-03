import React from './node_modules/react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/footer';

function Home() {
  return (

    
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Clica aqui e veja esse Jogo sensacional ^^."}
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
