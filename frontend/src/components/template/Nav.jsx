import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>

        //Refatorar em projetos futuros caso haja repetição, criar um componente NavItem
        //Criar NavItem, importar ele pro Nav.jsx e passar os parametros para o novo componente
