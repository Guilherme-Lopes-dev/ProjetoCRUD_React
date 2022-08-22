
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'
import Main from '../components/template/Main'



export default props => //Arrow function que recebe props como parametro
<BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Home>
            <Routes/>
        </Home>
        <Footer />
    </div>
</BrowserRouter>    