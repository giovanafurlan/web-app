import React from "react";
import styled from 'styled-components';
import market from '../../img/market.png'

export const Inicio = styled.section`
    height: 80vh;
    background-image: url(${market});  
`

export default function Home(){
    return(
        <Inicio>
            <h1>Racionalizando</h1>
            <h2>Em busca de um consumo consciente</h2>
            <button>Saiba Mais</button>
        </Inicio>
)}