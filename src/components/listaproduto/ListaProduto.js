import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Lista = styled.section`
    display: flex;
    flex-direction: column;

    table, th, td {
        border: 1px solid #29C16E;
    }

    th, td {
        padding: 0.5vw;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: #C4C4C4;
    }

    th{
        font-size: 2.4vh;
        font-weight: 200;
    }

    table{
        align-items: center;
        border-collapse: collapse;
        margin: 1vw;
    }

    
`

function ListaProduto() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('/rest/produto').then((resp) => {
            return resp.json()
        }).then((resp) => {
            setProdutos(resp)
            console.table(resp)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    const handleDelete = (codigo) => {
        fetch('/rest/produto/' + codigo, {
            method: 'delete'
        }).then(() => {
            window.location = '/'
        }).catch((err) => {
            console.error(err)
        })
    }


   return(
     <Lista>
         <h3>Lista</h3>
          <Link to="/incluir" className="inclui">Inserir Produto</Link>
          <table>
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Quantidade</th>
                      <th>Data de Vencimento</th>
                      <th>Valor Unitário</th>
                      <th>Valor Total</th>
                      <th>Editar</th>
                  </tr>
              </thead>
              <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.codigo}>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.dataValidade}</td>
                            <td>{produto.valorUnitario}</td>
                            <td>{produto.valorTotal}</td>
                            <td>
                                <Link title="Editar" to={`/editar/${produto.codigo}`}>Editar</Link> |
                                <Link title="Excluir" to='/' onClick={handleDelete.bind(this, produto.codigo)}>Excluir</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
          </table>
     </Lista>
)}

export default ListaProduto