import login_page from "../support/pages/login_page";
import cadastro_page from "../support/pages/cadastro_page";
import { faker } from "@faker-js/faker"
import dados from "../fixtures/dados.json"
describe('Cadastro', () => {


    beforeEach(() => {
        login_page.Acessandohome()
        cadastro_page.clicarCadastro()
        cadastro_page.validarmensagemtelaCadastro('Cadastro de usuário')
    });
    it('Cadastro com nome vazio', () => {
        cadastro_page.preencherEmail(dados.usuario.email)
        cadastro_page.preencherSenha(dados.usuario.senha)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo nome deve ser prenchido')


    })
    //cenário esta passando por erro da aplicação , pois não existe pessoa com nome 123
    it.skip('Cadastro com nome invalido', () => {
    //  cadastro_page.clicarCadastro()
    //cadastro_page.validarmensagemtelaCadastro('Cadastro de usuário')
    //cadastro_page.preencherNome('123')
    //cadastro_page.preencherEmail('teste@teste.com')
    //cadastro_page.preencherSenha('cjdnslcbusd')
    //cadastro_page.clicarbtnCadastro()
    //adastro_page.mensagemErro('O campo nome deve ser prenchido')
    })
    it('Cadastro com e-mail vazio', () => {
        cadastro_page.preencherNome(dados.usuario.nameUser)
        cadastro_page.preencherSenha(dados.usuario.senha)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Cadastro com e-mail invalido', () => {
        cadastro_page.preencherEmail('teste')
        cadastro_page.preencherNome(dados.usuario.nameUser)
        cadastro_page.preencherSenha(dados.usuario.senha)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Cadastro com e-mail sem @', () => {
        cadastro_page.preencherEmail('teste.com')
        cadastro_page.preencherNome(dados.usuario.nameUser)
        cadastro_page.preencherSenha(dados.usuario.senha)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Cadastro com e-mail sem extensão apos @', () => {
        cadastro_page.preencherEmail('teste@')
        cadastro_page.preencherNome(dados.usuario.nameUser)
        cadastro_page.preencherSenha(dados.usuario.senha)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Cadastro com senha vazia', () => {
        cadastro_page.preencherEmail(dados.usuario.email)
        cadastro_page.preencherNome(dados.usuario.nameUser)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Cadastro com senha invalido', () => {
        cadastro_page.preencherEmail(dados.usuario.email)
        cadastro_page.preencherNome(dados.usuario.nameUser)
        cadastro_page.preencherSenha('..')
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
     it.skip('Cadastro com senha com espaço', () => {
        //este cenário passa por falta da aplicação
    //  cadastro_page.clicarCadastro()
    // cadastro_page.validarmensagemtelaCadastro('Cadastro de usuário')
    // cadastro_page.preencherEmail('teste@teste.com')
    // cadastro_page.preencherNome('Marta Marinho')
    //  cadastro_page.preencherSenha('tes te')
    // cadastro_page.clicarbtnCadastro()
    // cadastro_page.mensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    //})

    it('Cadastro clicando apenas em cadastrar', () => {
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemErro('O campo nome deve ser prenchido')
    })
    it('Cadastro com sucesso', () => {
        const nome = faker.person.fullName()
        const email = faker.internet.email()
        
        cadastro_page.preencherEmail(email)
        cadastro_page.preencherNome(nome)
        cadastro_page.preencherSenha(dados.usuario.senha)
        cadastro_page.clicarbtnCadastro()
        cadastro_page.ValidarmensagemSucesso('Cadastro realizado!', nome)
    })
})
})
