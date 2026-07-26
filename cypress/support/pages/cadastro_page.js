export default {
    clicarCadastro() {
        cy.get('.fa-lock').click()


    },

    validarmensagemtelaCadastro(mensagem) {
        cy.get('.account_form > h3')
            .should('have.text', mensagem)
    },

    preencherNome(nome) {
        cy.get('#user').type(nome)
    },
    preencherSenha(senha) {
        cy.get('#password').type(senha)
    },
    preencherEmail(email) {
        cy.get('#email').type(email)
    },

    clicarbtnCadastro() {
        cy.get('#btnRegister').click()
    },

    ValidarmensagemErro(mensagem) {
        cy.get('#errorMessageFirstName').should('have.text', mensagem)


    },

    ValidarmensagemSucesso(mensagem, nome) {
        cy.get('#swal2-title').should('have.text', mensagem)
        cy.get('#swal2-html-container')
        .should('have.text', `Bem-vindo ${nome}`)
    }


}