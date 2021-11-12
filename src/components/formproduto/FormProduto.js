import React, { useEffect, useState } from 'react'
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

function FormProduto(props) {

    let id = null
    if (props.match.path.toLowerCase().includes('editar')) {
        id = props.match.params.codigo
    }
    const [novo, setNovo] = useState({
        codigo: id,
        nome: "",
        quantidade: "",
        dataValidade: "",
        valorUnitario: "",
        valorTotal: ""
    })

    let metodo = 'post'
    if (id) {
        metodo = 'put'
    }
    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/rest/produto/' + (id ? id : ""), {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = '/'
        })
    }

    useEffect(() => {
        if (id) {
            fetch("/rest/produto/" + id).then(resp => {
                return (resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    }, [id])

   return(
      <Formulario>
          <h3>Adicionar/ Editar Produtos</h3>
          <p>Gerenciamento de estoque de produtos</p>
          <div className="linha">
              <figure>
              <img src={buy} alt="Carrinho de supermercado" />
          </figure>
          <form onSubmit={handleSubmit}>
                <div className="formulario">
                    <label for="nome" className="row">Nome</label>
                    <input type="text" id="nome" name="nome" class="center-block" value={novo.nome} onChange={handleChange}/><br/>
                    <label for="qtd">Quantidade</label>
                    <input type="number" id="quantidade" name="quantidade" class="center-block" value={novo.quantidade} onChange={handleChange}/><br/>
                    <label for="dataValidade">Data de Validade</label>
                    <input type="text" id="dataValidade" name="dataValidade" class="center-block" value={novo.dataValidade} onChange={handleChange}/><br/>
                    <label for="valorUnitario">Valor Unidade (R$)</label>
                    <input type="number" id="valorUnitario" name="valorUnitario" class="center-block" value={novo.valorUnitario} onChange={handleChange}/><br/>
                    <label for="valorTotal">Valor Total (R$)</label>
                    <input type="number" id="valorTotal" name="valorTotal" class="center-block" value={novo.valorTotal} onChange={handleChange}/><br/>
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