export default{
 ClicarHomeProdutos(){
cy.get('#menuHome')
  .realHover()
 cy.get('#item0')
  .should('be.visible')
  .click()
  


 },

ClicarEletronics() {
    cy.get('#menuHome').trigger('mouseover')
    cy.wait(2000)
cy.get('#item0').click()
},

    EscolhendoProduto(){
        cy.wait(3000)
        cy.get('a[href="/product-details-two/22"]').eq(0).click()
        cy.get('img[src="/static/media/2.fd833ef5.png"]',{timeout:3000}).should('be.visible')
     cy.get('[name="product"]').select('M')

    },


    AdicionandoProdutoCarrinho(){
cy.get('.btn_sm').click()
    },
    LimparCarrinho(){

    },
    RemoverProduto(){
        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa')
        .should('be.visible').click()
     
       cy.get('.offcanvas-cart-action-button').contains('View Cart',{timeout:2000}).click()
       cy.get('.product_remove').eq(1).click()


    },

    FinalizandoCompra(){
         cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa')
        .should('be.visible').click()
     
       cy.get('.offcanvas-cart-action-button').contains('Checkout',{timeout:2000}).click()
cy.get('#fname').type('Marta')
cy.get('#lname').type('Marinho')
cy.get('#cname').type('Testes QA')
cy.get('#email').type('testesmarta@teste.com')

cy.get('#country').
select('usa')

cy.get('#city').
select('Aland Islands')

cy.get('#zip').
type('13068602')

cy.get('#faddress').
type('Rua das Risadas')

cy.get('#messages').
type('Obrigada')

cy.get('#materialUnchecked').
click()

cy.contains('Button','Save').click()
cy.contains('label','Mobile Banking').click()
cy.contains('Button','Place Order').click()

cy.get('.offer_modal_left').should('be.visible')

 cy.get('h2')
      .should('be.visible')
      .and('contain.text', 'Order success!')

       cy.get('h3')
      .should('be.visible')
      .and('contain.text', 'Congrats! Your order was created with sucess!')

//.contains('have.text','Order success!Congrats! Your order was created with sucess!',{timeout:2000})
//.should('have.text','Congrats! Your order was created with sucess!')
    },
    usuarioLogado(email,senha){
        cy.get('.fa-user').click()
          cy.get('#user').type(email)
        cy.get('#password').type(senha)
 cy.get('#btnLogin').click()
    }
}