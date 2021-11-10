import React from "react";
import styled from 'styled-components';
import andrey from '../../img/andrey.jpeg'
import diego from '../../img/diego.jpeg'
import emily from '../../img/emily.jpeg'
import giovana from '../../img/giovana.jpeg'
import joao from '../../img/joao.jpeg'

export const Grupo = styled.section`
    height: 77vh;

    img{
        width: 15vw;
        border-radius: 50%;

    }

    .integrantes{
        display: flex;
        justify-content: center;
    }

    figure{
        margin: 3vw;
        width: 20vw;
        border-radius: 50%;
    }

    @media screen and (max-width: 600px){
        height: 100vh;

        .integrantes{
            flex-direction: column;
        }
    }
`

export default function Equipe(){

    const [visivel, setVisivel] = React.useState(false);

    return(
        <Grupo>
            <h3>Equipe</h3>
            <p>1TDSS</p>
            <div className="integrantes">
                    <figure>
                        <img src={andrey} alt="Integrante do projeto" />
                        <figcaption>Andrey Garcia<br/>RM87219</figcaption>
                    </figure>
                    <figure>
                        <img src={diego} alt="Integrante do projeto" />
                        <figcaption>Diego Augusto<br/>RM86877</figcaption>
                    </figure>
                    <figure>
                        <img src={emily} alt="Integrante do projeto" />
                        <figcaption>Emily Manfrin<br/>RM87198</figcaption>
                    </figure>
                    <figure>
                        <img src={giovana} alt="Integrante do projeto" />
                        <figcaption>Giovana Furlan<br/>RM88936</figcaption>
                    </figure>
                    <figure>
                        <img src={joao} alt="Integrante do projeto" />
                        <figcaption>João Victor<br/>RM89087</figcaption>
                    </figure>
            </div>

            <div>
                <button onClick={() => setVisivel(!visivel)}>{visivel ? 'Esconder' : 'Mostrar'}</button>
                {visivel && <div>MELHOR GRUPO DA FIAP</div>}
            </div>
        </Grupo>
)}