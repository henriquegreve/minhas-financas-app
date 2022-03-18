import React from "react";

import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localstorageService";

import axios from "axios";

class Home extends React.Component{

    state = {
        saldo: 0
    }

    constructor() {
        super()
        this.usuarioService = new UsuarioService();
    }

    componentDidMount () {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')

        axios.get(`http://192.168.15.74:8080/api/usuarios/${usuarioLogado.id}/saldo`) 
            .then( response => {
                this.setState({ saldo: response.data })
            }).catch( error => {
                console.error(error.response)
            });
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo} </p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" 
                    href="#/cadastro-usuario" 
                    role="button"><i className="fa fa-users"/> 
                    Cadastrar Usuário
                    </a>
                    <a className="btn btn-dark btn-lg" 
                    href="https://bootswatch.com/lux/#" 
                    role="button"><i className="fa fa-users"/>
                    Cadastrar Lançamentos
                    </a>  
                </p>
            </div>
        )
    }
}

export default Home