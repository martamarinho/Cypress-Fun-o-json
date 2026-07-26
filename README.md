# Projeto de Automação com Cypress

Este projeto foi desenvolvido utilizando **Cypress** e organizado com o padrão **Page Objects**, que permite manter os testes mais organizados, reutilizáveis e de fácil manutenção.

Ao utilizar esse padrão, centralizamos os seletores e as ações da aplicação nos arquivos da pasta **pages**. Dessa forma, caso algum elemento da interface seja alterado, basta atualizar o seletor em um único lugar, sem a necessidade de modificar todos os testes.

Para manter uma boa organização, também foi criada uma pasta **fixtures**, contendo arquivos **JSON** responsáveis por armazenar dados utilizados durante a execução dos testes, como e-mails, senhas e outras informações necessárias para preenchimento dos formulários. Além disso, foi utilizada a biblioteca **Faker** para geração de dados dinâmicos em cenários específicos.

Outra prática adotada foi a utilização do **beforeEach()**, responsável por executar ações comuns antes de cada teste, como acessar a aplicação, configurar o ambiente e realizar etapas repetitivas. Isso reduz a duplicação de código e torna os testes mais limpos e fáceis de manter.

O projeto também conta com integração contínua utilizando **GitHub Actions**, permitindo que a suíte de testes seja executada automaticamente, facilitando a validação da aplicação a cada alteração realizada no repositório.

Durante o desenvolvimento foram identificados alguns comportamentos da própria aplicação, como cenários em que o carrinho já inicia com produtos previamente adicionados. Essas limitações pertencem ao ambiente de demonstração e foram documentadas durante o desenvolvimento da automação.

## Tecnologias utilizadas

* Cypress
* JavaScript
* Page Objects
* Fixtures (JSON)
* Faker
* Git
* GitHub
* GitHub Actions

O objetivo deste projeto foi aplicar boas práticas de automação de testes, priorizando organização, reutilização de código, facilidade de manutenção e integração contínua.

Espero que gostem do projeto! Sugestões e feedbacks são sempre bem-vindos.
