import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import market from '../../img/market.png'
import logo from '../../img/logo.png'

export const Inicio = styled.section`
    height: 80vh;
    background-image: url(${market});  

    .texto{
        width: 97.5vw;
        height: 55vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .saiba{
        color: black;
        text-decoration: none;
    }

`

export default function Home(){
    return(
        <Inicio>
            <div className="texto">
            <figure>
                <img src={logo} alt="Logo de fruta" />
            </figure>
                <h1>Racionalizando</h1>
                <h2>Em busca de um consumo consciente</h2>
            </div>
            <button><Link to="/sobre" className="saiba">Saiba Mais</Link></button>
        </Inicio>
)}