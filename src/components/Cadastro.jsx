import React, { Component } from 'react'
import { Container } from '../style/DefaultContainer'

class PageCadastro extends Component {

    constructor() {
        super();
        this.email = "";
        this.nome = ""
    }
    handlerEmail(evento) {
        evento.stopPropagation()
        this.email = evento.target.value
        
    }

    handlerNome(evento){
        evento.stopPropagation()
        this.nome = evento.target.value
        
    }
    Submit(evento){
        evento.preventDefault()
        evento.stopPropagation()

        console.log("envia o email garai"+ " " +this.email+ "" +this.nome)
    }
    render() {

        return (

            <Container default>

                <h1>Cadastre-se agora</h1>
                <form style = {{display:"flex", flexDirection:"column"}}
                onSubmit = {this.Submit.bind(this)}>
                    <label>Email</label>
                    <input type="text"
                        placeholder="Insira seu melhor email"
                        onChange={this.handlerEmail.bind(this)}
                    />
                    <label>Nome</label>
                    <input type="text"
                        placeholder="Insira seu Nome"
                        onChange={this.handlerNome.bind(this)}
                    />
                    <input type="submit" value="Submit"
                    ></input>

                </form>
            </Container>
        )
    }
}

export default PageCadastro