//import login from "../e2e/login.cy"
import login_page from "../support/pages/login_page";
import compra from "../fixtures/compra.json"
import compra_page from "../support/pages/compra_page";


describe('Compra',()=>{
    beforeEach(() => {
           cy.viewport(1920, 1080)
         login_page.Acessandohome()
         compra_page.usuarioLogado(compra.usuario.email,compra.usuario.senha)
         login_page.ValidarMensagemSucesso('Login realizado', compra.usuario.email)
    });
    it('Adicionando Produto ao Carrinho',()=>{
        compra_page.ClicarHomeProdutos()
       compra_page.EscolhendoProduto()
       compra_page.AdicionandoProdutoCarrinho()
    })
    it('Removendo um Produto do Carrinho',()=>{
        compra_page.ClicarHomeProdutos()
        compra_page.RemoverProduto()
    })
    it.only('Finalizando Compra',()=>{  
        compra_page.ClicarHomeProdutos()
       compra_page.EscolhendoProduto()
       compra_page.AdicionandoProdutoCarrinho()
       compra_page.FinalizandoCompra()
    })
})