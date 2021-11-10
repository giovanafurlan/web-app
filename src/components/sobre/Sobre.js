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
                    <figcaption>Mudança</figcaption>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero accusamus dicta ab placeat officiis atque aut unde, dolor, molestiae et facilis facere quo quia nobis? Repudiandae saepe maiores eos.</p>
                </figure>
                <figure>
                    <img src={onu} alt="Planeta terra" />
                    <figcaption>ONU</figcaption>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero accusamus dicta ab placeat officiis atque aut unde, dolor, molestiae et facilis facere quo quia nobis? Repudiandae saepe maiores eos.</p>
                </figure>
                <figure>
                    <img src={igualdade} alt="Representação de uma comunidade com pessoas e residências" />
                    <figcaption>Igualdade</figcaption>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero accusamus dicta ab placeat officiis atque aut unde, dolor, molestiae et facilis facere quo quia nobis? Repudiandae saepe maiores eos.</p>
                </figure>
            </div>
        </Info>
)}