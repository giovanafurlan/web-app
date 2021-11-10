import React from 'react'
import { Topo } from '../../styled'
import { Link } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import Sobre from '../sobre/Sobre'
import Equipe from '../equipe/Equipe'
import Contato from '../contato/Contato'
import Acesso from '../acesso/Acesso'
import Cadastro from '../cadastro/Cadastro'
import FormProduto from '../formproduto/FormProduto'
import ListaProduto from '../listaproduto/ListaProduto'

export default function Menu(){
    return (
        <Topo>
                <ul>
                    <li ><Link to="/" className="opcao">Home</Link></li>
                    <li><Link to="/sobre" className="opcao">Sobre</Link></li>
                    <li><Link to="/equipe" className="opcao">Equipe</Link></li>
                    <li><Link to="/contato" className="opcao">Contato</Link></li>
                    <li><Link to="/acesso" className="opcao acessar">Acessar</Link></li>
                </ul>

                <Switch >
                    <Route path="/" exact component={Home}/>
                    <Route path="/sobre" component={Sobre}/>
                    <Route path="/equipe" component={Equipe}/>
                    <Route path="/contato" component={Contato}/>
                    <Route path="/acesso" component={Acesso}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/incluir" component={FormProduto}/>
                    <Route path="/lista" component={ListaProduto}/>
                </Switch >
        </Topo>
)}