import React from "react";
import styled from 'styled-components';

export const Info = styled.section`
  
`

export default function Sobre(){
    return(
        <Info>
            <h2>Sobre</h2>
            <p>A plataforma constitui em uma conexão entre supermercados e entidades assistenciais. Estas poderão procurar supermercados que tenham descontos em produtos próximos à data de validade ou até mesmo doações de supermercados próximos a sua localidade, tendo em vista toda a segurança alimentar vigente em leis e respaldados pela vigilância sanitária.</p>

            <div>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Mudança</figcaption>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero accusamus dicta ab placeat officiis atque aut unde, dolor, molestiae et facilis facere quo quia nobis? Repudiandae saepe maiores eos.</p>
                </figure>
                <figure>
                    <img src="" alt="" />
                    <figcaption>ONU</figcaption>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero accusamus dicta ab placeat officiis atque aut unde, dolor, molestiae et facilis facere quo quia nobis? Repudiandae saepe maiores eos.</p>
                </figure>
                <figure>
                    <img src="" alt="" />
                    <figcaption>Igualdade</figcaption>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero accusamus dicta ab placeat officiis atque aut unde, dolor, molestiae et facilis facere quo quia nobis? Repudiandae saepe maiores eos.</p>
                </figure>
            </div>
        </Info>
)}