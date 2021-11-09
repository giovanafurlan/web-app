import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../../img/logo.png'

export const Registro = styled.section`
    width: 97.2vw;
    height: 80vh;
    border: solid 2px #29C16E;

    .coluna{
        font-size: 2.2vh;
        display: flex;
        justify-content: space-evenly;
    }

    button{
        margin: 1vw;
        float: inline-end;
    }

    input{
        margin: 1vw;
        width: 20vw;
        height: 4vh;
    }

    label{
        text-decoration: underline overline wavy #29C16E;
    }

    .cadastro{
        color: black;
        text-decoration: none;
    }
`

export default function Cadastro(){
    return(
        <Registro>
            <h2>Cadastro</h2>
            <figure>
                <img src={logo} alt="Logo de fruta" />
            </figure>
            <form>
                <div className="coluna">
                    <div className="coluna1">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" required/><br/>
                    <label for="email">Email</label>
                    <input type="email" id="email" required/><br/>
                    <label for="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" required/><br/>
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" required/><br/>
                    <label for="CEP">CEP</label>
                    <input type="text" id="CEP" required/><br/>
                </div>
                
                <div className="coluna2">
                    <label for="rua">Rua</label>
                    <input type="text" id="rua" required/><br/>
                    <label for="bairro">Bairro</label>
                    <input type="text" id="bairro" required/><br/>
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" required/><br/>
                    <label for="estado">Estado</label>
                    <input type="text" id="estado" required/><br/>
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" required/><br/>
                </div>
                </div>
                
                
                <div className="botoes">
                    <button type="submit"><Link to="/acesso" className="cadastro">Cadastrar</Link></button>
                    <button type="reset">Limpar</button>
                </div>
                
            </form>
        </Registro>
)}