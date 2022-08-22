import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Redirect} from 'react-router'
import Home from '../components/home/Home'
import UserCrud from "../components/user/UserCrud";

//Componente funcional, será usando :

export default props=>(
    <Routes>
        <Route exact path='/' element={<Home/>}/>  
        <Route path='/users' element={<UserCrud/>}/>
        <Redirect path ='*' element={<Home/>}/>
    </Routes>
);
















