import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Registro = styled.section`
  
`

export default function Cadastro(){
    return(
        <Registro>
            <form>
                <label for="nome">Nome</label>
                <input type="text" id="nome"/>
                <label for="email">Email</label>
                <input type="email" id="email"/>
                <label for="cnpj">CNPJ</label>
                <input type="text" id="cnpj"/>
                <label for="senha">Senha</label>
                <input type="password" id="senha"/>

                <button type="submit"><Link to="/login" className="cadastro">Cadastrar</Link></button>
            </form>
        </Registro>
)}