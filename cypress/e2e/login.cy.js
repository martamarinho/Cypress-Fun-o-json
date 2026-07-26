
import login_page from "../support/pages/login_page"
import { faker } from "@faker-js/faker"
import login from "../fixtures/login.json"
describe('Login', () => {
    beforeEach('Logando', () => {
        login_page.Acessandohome()
        login_page.ClicarLogin()

    })


    it('Login com e-mail vazio', () => {
        login_page.PreencherSenha(login.usuario.senha)
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('E-mail inválido.')

    })
    it('Login com senha vazio', () => {
        login_page.PreencherEmail(faker.internet.email())
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('Senha inválida.')
    })
    it('Login com e-mail invalido', () => {
        login_page.PreencherEmail('teste@')
        login_page.PreencherSenha(login.usuario.senha)
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('E-mail inválido.')

    })
    it('Login com senha invalida', () => {
        login_page.PreencherEmail(login.usuario.email)
        login_page.PreencherSenha('te')
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('Senha inválida.')


    })
    it('Login clicando apenas em logar', () => {
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('E-mail inválido.')

    })
    it('Login com e-mail sem @', () => {
        login_page.PreencherEmail('teste.com')
        login_page.PreencherSenha(login.usuario.senha)
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('E-mail inválido.')


    })
    it('Login com e-mail sem extensão apos @', () => {
        login_page.PreencherEmail('teste@')
        login_page.PreencherSenha(login.usuario.senha)
        login_page.ClicarLogar()
        login_page.ValidarMessageErro('E-mail inválido.')


    })

    //senha com espaço deveria não deixar logar , mas a aplicação deixou .
    it.skip('Login com senha com espaço', () => {
        login_page.PreencherEmail(login.usuario.email)
        login_page.PreencherSenha('123 123')
        login_page.ClicarLogar()
        login_page.ValidarMensagemSucesso('Login realizado', login.usuario.email)


    })
    it('Login com sucesso', () => {
        const email = faker.internet.email()
        login_page.PreencherEmail(email)
        login_page.PreencherSenha('123 123')
        login_page.ClicarLogar()
        login_page.ValidarMensagemSucesso('Login realizado', email)

    })

})