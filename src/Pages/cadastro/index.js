import React from 'react';
import PageDefault from '../../componentes/PageDefault';
import { Link } from 'react-router-dom';



function CadastroVideo(){
return(

<PageDefault>

    <h1>Cadastrar novo video</h1>

    <Link  to="/cadastro/categoria">
        Cadastrar uma nova categoria

</Link>


</PageDefault>
)
}

export default CadastroVideo;