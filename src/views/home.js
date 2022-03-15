import React from "react";

import axios from "axios";

import { withRouter } from "react-router-dom";

class Home extends React.Component{

    state = {
        saldo: 0
    }

    componentDidMount () {
        const usuarioLogadoString = localStorage.getItem('_usuario_logado')
        const usuarioLogado = JSON.parse(usuarioLogadoString)

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

export default withRouter(Home)