import './Nav.css'
import React from 'react'

export default props =>
        <aside className="menu-area">
            <nav className="menu">
                <a href='#/'>
                    <i className='fa fa-home'></i> Início
                </a>
                <a href='#/users'>
                    <i className='fa fa-users'></i> Usuários
                </a>
            </nav>
        </aside>

        //Refatorar em projetos futuros caso haja repetição, criar um componente NavItem
        //Criar NavItem, importar ele pro Nav.jsx e passar os parametros para o novo componente
