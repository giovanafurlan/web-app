import React from "react";
import styled from 'styled-components';

export const Mensagem = styled.section`
width: 97.2vw;
    height: 80vh;
    border: solid 2px #29C16E;

    .formulario{
        font-size: 2.2vh;
        display: flex;
        justify-content: space-around;
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

    .mens{
        display:block; 
        float:left;
    }​


    .cadastro{
        color: black;
        text-decoration: none;
    }
`

function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Mensagem enviada");
  }

  return (
    <Mensagem>
        <form onSubmit={handleSubmit}>
            <h3>Entre em contato</h3>
            <p>Faça uma parceria e/ou tire suas dúvidas</p>
            <div className="formulario">
            <div className="formulario1">
                <label for="nome">Nome</label>
                <input type="text" id="nome"/><br/>
                <label for="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div className="formulario2">
                <label for="mens" className="mens">Mensagem</label>
                <textarea type="text" id="mens" rows="20" cols="30"/>
            </div>
            </div>

            <button type="submit">Enviar</button>

        </form>
    </Mensagem>
  )
}

export default Contato