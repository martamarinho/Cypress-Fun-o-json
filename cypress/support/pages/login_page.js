export default{

    Acessandohome(){
cy.visit('/')
    },

    ClicarLogin(){
        cy.get('.fa-user').click()
    },

    PreencherEmail(email){
        cy.get('#user').type(email)

    },

    PreencherSenha(senha){
        cy.get('#password').type(senha)

    },
    ClicarLogar(){
     cy.get('#btnLogin').click()
    },

    ValidarMessageErro(mensagem){
        cy.get('.invalid_input').should('have.text', mensagem)

    },

    ValidarMensagemSucesso(mensagemsucesso,email){
        cy.get('#swal2-title')
        .should('have.text', mensagemsucesso)
          cy.get('#swal2-html-container')
          .should('have.text',`Olá, ${email}`)
          cy.get('.swal2-confirm').click()
    },

    UsuarioLogado(email,senha){
        cy.get('#user').type(email)
        cy.get('#password').type(senha)
 cy.get('#btnLogin').click()
    }
}