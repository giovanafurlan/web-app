import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import buy from '../../img/buy.jpg'

export const Formulario = styled.section`
    height: 85vh;
    display: flex;
    flex-direction: column;
    margin: 0;

    img{
        float: left;
        width: 23vw;
        opacity: 0.7;
    }

    figure{
        margin: 0;
        width: 20vw;
    }

    .linha{
        flex-direction: row;
        width: 50vw;
        margin-left: 20vw;
    }

    button{
        margin: 1vw;
    }

    form{
        font-size: 2.2vh;
        width: 20vw;
        float: right;
    }

    form,img{
        margin: 0;
    }

    input{
        width: 20vw;
        height: 4vh;
    }

    .center-block {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }

    .cancela{
        color: black;
        text-decoration: none;
    }

    .cancela:hover{
        text-decoration: underline;
    }
`

function FormProduto() {
   return(
      <Formulario>
          <h3>Adicionar/ Editar Produtos</h3>
          <p>Gerenciamento de estoque de produtos</p>
          <div className="linha">
              <figure>
              <img src={buy} alt="Carrinho de supermercado" />
          </figure>
          <form>
                <div className="formulario">
                    <label for="nome" className="row">Nome</label>
                    <input type="text" id="nome" name="nome" class="center-block"/><br/>
                    <label for="qtd">Quantidade</label>
                    <input type="number" id="qtd" name="qtd" class="center-block"/><br/>
                    <label for="data">Data de Validade</label>
                    <input type="date" id="data" name="data" class="center-block"/><br/>
                    <label for="valorUnidade">Valor Unidade (R$)</label>
                    <input type="number" id="valorUnidade" name="valorUnidade" class="center-block"/><br/>
                    <label for="valorTotal">Valor Total (R$)</label>
                    <input type="number" id="valorTotal" name="valorTotal" class="center-block"/><br/>
                </div>
                <div className="botao">
                    <button className="btn" type="submit">Enviar</button>
                </div>
                <Link to="/" className="cancela">Cancelar</Link>
          </form>
          </div>  
      </Formulario>
)}

export default FormProduto