import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { Topo } from '../../styled'

export default function Menu(){
    return (
        <Topo>
            <ul>
                <li><Link to="/" className="opcao">Home</Link></li>
                <li><Link to="/sobre" className="opcao">Sobre</Link></li>
                <li><Link to="/equipe" className="opcao">Equipe</Link></li>
                <li><Link to="/contato" className="opcao">Contato</Link></li>
                <li><Link to="/acesso" className="opcao acessar">Acessar</Link></li>
            </ul>

        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>

        </Topo>
)}