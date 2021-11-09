import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../../img/logo.png'

export const Login = styled.section`
    width: 97.2vw;
    height: 80vh;
    border: solid 2px #29C16E;

    button{
        margin: 1vw;
    }

    input{
        margin: 1vw;
        width: 20vw;
        height: 4vh;
    }

    label{
        text-decoration: underline overline wavy #29C16E;
    }

    .login{
        color: black;
        text-decoration: none;
    }

    .cadastro{

    }
`

export default function Acesso(){
    return(
        <Login>
            <h2>Login</h2>
            <figure>
                <img src={logo} alt="Logo de fruta" />
            </figure>
            <form>
                <label for="email">Email</label>
                <input type="email" id="email"/><br/>
                <label for="senha">Senha</label>
                <input type="password" id="senha"/><br/>

                <button><Link to="/produto" className="login">Acessar</Link></button>
            </form>
            <Link to="/cadastro" className="cadastro">Cadastre-se</Link>
        </Login>
)}