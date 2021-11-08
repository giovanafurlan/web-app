import React from "react";
import styled from 'styled-components';

export const Mensagem = styled.section`
  
`

export default function Contato(){
    return(
        <Mensagem>
            <h2>Entre em contato</h2>
            <h3>Faça uma parceria e/ou tire suas dúvidas</h3>
            <form>
                <label for="nome">Nome</label>
                <input type="text" id="nome" />
                <label for="email">Email</label>
                <input type="text" id="email" />
                <label for="mens">Mensagem</label>
                <input type="text-area" id="mens" />
            </form>
        </Mensagem>
)}