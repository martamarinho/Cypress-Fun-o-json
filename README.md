Aqui temos um projeto com Cypress , organizado com pageObjets . 
Ao usar esse padrão deixamos os testes organizados , com um padrão de facil entendimento . De acordo venha surgir necessidade de ajustes 
podemos apenas mudar os dados no arquivo de page onde ficam localizados os elementos e no restante dos testes será atualizado, deixando assim 
facil de dar as manutenções necessarias. 
Visando manter a organização foi criada também uma pasta com arquivo json , que utilizamos para receber os valores de determinados preenchimento de dados 
de acordo necessidade , ao implementar os imports das pastas no teste , chamamos o dado a ser preenchido no campo . 
Usei o beforeach para organizar os testes , sabendo que desta forma a cada it , teste rodado preciso primeiro acessar a aplicação, o beforeach fara essa função de chama essas ações de repeticão ao iniciar cada teste.
Espero que gostem desse tipo de organização! 
