import React from "react";
import styled from 'styled-components';
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

export const Mensagem = styled.section`
    width: 97.2vw;
    height: 80vh;

    form{
        height: 50vh;
    }

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
        margin: 1vw;
        float:left;
    }​

    .cadastro{
        color: black;
        text-decoration: none;
    }

    .icone{
        font-size: 2vw;
        margin: 1vw 1vw 0 0;
        color: #29C16E;
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
                <label for="nome"><AiOutlineUser className="icone"/>Nome</label>
                <input type="text" id="nome" required/><br/>
                <label for="email"><AiOutlineMail className="icone"/>Email</label>
                <input type="email" id="email" required/>
            </div>
            <div className="formulario2">
                <label for="mens" className="mens"><AiFillMessage className="icone"/>Mensagem</label>
                <textarea type="text" id="mens" rows="20" cols="30" required/>
            </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </Mensagem>
  )
}

export default Contato