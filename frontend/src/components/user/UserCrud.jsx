import React, { Component } from "react";
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, listar, Alternar e Excluir!'
}

//Objeto com as propiedades do cabeçalho

//Primeiro criar o estado inicial do componente e a url do backend

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}


export default class UserCrud extends Component {
    state = { ...initialState }//Estado foi inicializado aqui

    clear() {
        this.setState({ user: initialState.user })
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //Se user.id for verdadeiro, será feito um put caso contrário será feito post(Put altera, post inclui)
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl //definindo a url
        axios[method](url, user)                                          //Chamando o axios que é uma função e passando as urls como parametro
                .then(resp=>{
                    const list = this.getUpdatedList(resp.data) //resp.data é o usuário que veio pelo webservice, json.server
                    this.setState({user:initialState.user, list})
                })
    }

    getUpdatedList(user){

        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})

    }

    renderForm(){
        console.log("teste")
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome: </label>
                            <input type="text" className="form-control" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite seu nome..."></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite seu e-mail..."></input>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )

    }


    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}

             
            </Main>
        )
    }

}

//Componente de classe, com metodo de ciclo de vida e componente possui estado.
//Adicionar userForm por exemplo, usando função pra setar o estado inicial 