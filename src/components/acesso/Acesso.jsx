import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Login = styled.section`
  
`

export default function Acesso(){
    return(
        <Login>
            <h3>Login</h3>
            <form>
                <label for="email">Email</label>
                <input type="email" id="email"/>
                <label for="senha">Senha</label>
                <input type="password" id="senha"/>

                <button type="submit"><Link to="/produto" className="login">Acessar</Link></button>
            </form>
            <Link to="/cadastro" className="cadastro">Cadastre-se</Link>
        </Login>
)}