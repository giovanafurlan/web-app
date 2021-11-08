import styled from 'styled-components';

export const Container = styled.div`
    font-family: Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
    align-items: center;

    h1,h2,h3{
        text-transform: uppercase;
    }

    h1{
        font-size: 3.2vh;
    }

    h2{
        font-size: 3vh;
    }

    h3{
        font-size: 2.7vh;
    }

    p,li{
        font-size: 2.4vh;
    }
`

export const Topo = styled.nav`
    ul {
        list-style-type: none;
        overflow: hidden;
        display: flex;
        flex-direction: inline;
        justify-content: space-around;
        padding: 1vw;
        background-color: lightgray;
    }

    li .opcao{
        padding: 1vw;
        color: black;
        text-decoration: none;
    }

    li .acessar{
        background-color: #29C16E;
    }

    li .opcao:hover {
        background-color: #a8a8a8;
    }
`

export const Base = styled.footer`
    overflow: hidden;
    display: flex;
    flex-direction: inline;
    justify-content: space-between;
    background-color: lightgray;

    .icone{
        font-size: 2vw;
        color: #29C16E;
        margin: 1vh;
    }

    p{
        margin-left: 1vh;
    }
`