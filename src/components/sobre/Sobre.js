import React from "react";
import styled from 'styled-components';
import mudanca from '../../img/mudanca.png'
import onu from '../../img/onu.png'
import igualdade from '../../img/igualdade.png'

export const Info = styled.section`
    .cartao{
        display: flex;
        justify-content: space-between;
    }

    .sobre{
        height: 20vh;
        margin: 2vh 0 2vh 0;
        display: flex;
    }

    .sobre p{
        flex-direction: center;
    }


    figure{
        flex-direction: column;
        border-bottom: 6px solid #EF3C56;
    }

    figure p{
        width: 20vw;
    }

    figcaption{
        font-weight: bold;
    }

    @media screen and (max-width: 600px){
        height: 190vh;

        img{
            width: 25vw;
        }

        .cartao{
            flex-direction: column;
            height: 30vh;
            margin-top: 10vh;
        }

        figure p{
            width: 60vw;
        }
    }
`

export default function Sobre(){
    
    return(
        <Info>
            <h2>Sobre</h2>
            <div className="sobre">
                <p>A plataforma Racionalizando constitui em uma conexão entre supermercados e entidades assistenciais. Estas poderão procurar supermercados que tenham descontos em produtos próximos à data de validade ou até mesmo doações de supermercados próximos a sua localidade, tendo em vista toda a segurança alimentar vigente em leis e respaldados pela vigilância sanitária.</p>
            </div>
            <div className="cartao">
                <figure>
                    <img src={mudanca} alt="Simulação de um gráfico de plantas" />
                    <figcaption>Problema</figcaption>
                    <p> Um terço de toda a comida produzida para consumo humano no mundo é desperdiçado. O montante chega a 1,3 bilhão de toneladas por ano, segundo o mais recente relatório apresentado pela Organização das Nações Unidas para a Alimentação e a Agricultura (FAO).</p>
                </figure>
                <figure>
                    <img src={onu} alt="Planeta terra" />
                    <figcaption>ONU</figcaption>
                    <p>Objetivo de Desenvolvimento Sustentável 2 <br/>(Fome zero e agricultura sustentável) <br/>Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.</p>
                </figure>
                <figure>
                    <img src={igualdade} alt="Representação de uma comunidade com pessoas e residências" />
                    <figcaption>Mudança</figcaption>
                    <p>Para tentar reverter esse desperdício — que ocorre do início da cadeia de produção até a casa do consumidor —, os bancos de alimentos fazem um trabalho hercúleo ao coletar legumes, verduras, carnes e frutas que seriam jogados no lixo e redistribuir tudo entre instituições.</p>
                </figure>
            </div>
        </Info>
)}