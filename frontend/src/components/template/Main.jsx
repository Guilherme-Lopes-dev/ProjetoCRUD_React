import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>


//Header está pegando as propiedades do main por propragação, 
//nesse caso pegando icone titulo e subtitulo
