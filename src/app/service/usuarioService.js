import ApiService from "../apiService";

import ErroValidacao from "../exception/ErroValidacao";

class UsuarioService extends ApiService {

    constructor() {
        super('/api/usuarios')
    }

    autenticar(credenciais) {
        return this.post('/autenticar', credenciais)
    }
    
    obterSaldoPorUsuario(id) {
        return this.get(`/${id}/saldo`)
    }

    salvar(usuario) {
        return this.post('', usuario)
    }

    validar(usuario) {
        const error = []

        if(!usuario.nome) {
            error.push('O campo Nome é obrigatório')
        }

        if(!usuario.email) {
            error.push('O campo Email é obrigatório')
        }else if( !usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ) {
            error.push('Informe um Email válido.')
        }

        if(!usuario.senha || !usuario.senhaRepeticao){
            error.push('Digite a senha 2x.')
        }else if(usuario.senha !== usuario.senhaRepeticao) {
            error.push('As senhas não batem.')
        }

        if(error && error.length > 0) {
            throw new ErroValidacao(error);
        }
    }

}

export default UsuarioService;