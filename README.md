<div align="center">
  <div>
    <img 
    src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"
    width="400"
    />
  </div>
  <br/>
  <br/>
	</a>
  <p>Busque aprender sempre mais e mais </p>
 
</div>
<br/>

# contractTest_covid
Projeto simples de automação de teste de contrato.


## Referência

 - [Cypress](https://www.cypress.io/)
 - [ajv](https://ajv.js.org/)
 - [Allure-report plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)

# Guia de Instalação
Este guia irá fornecer informações sobre como instalar as dependências necessárias para executar este projeto.

# Cypress
O Cypress pode ser instalado globalmente ou localmente no projeto. Para instalar globalmente, execute o seguinte comando no terminal:

````node
npm install -g cypress
````
Para instalar localmente no projeto, execute o seguinte comando:

````
npm install cypress --save-dev
````

# Ajv
O Ajv pode ser instalado utilizando o gerenciador de pacotes npm. Execute o seguinte comando no terminal:

````node
npm install ajv
````

# Allure Report
O Allure Report pode ser instalado utilizando o gerenciador de pacotes npm. Execute os seguintes comandos no terminal:

````node
npm install @shelex/cypress-allure-plugin --save-dev
npm install allure-commandline --save-dev
````

Configuração
Após a instalação, adicione o seguinte script ao arquivo package.json:

````json
"cy:run": "npx cypress run --env allure=true"
````
Este script irá executar os testes e gerar os resultados para o Allure Report.

# Executando os Testes
Para executar os testes, utilize o seguinte comando:

````js
npm run cy:run
````
Após a execução dos testes, os resultados serão gerados na pasta allure-results. Para gerar o relatório, execute o seguinte comando:

````js
npm run allure:generate
````
Para visualizar o relatório gerado, execute o seguinte comando:

````js
npm run allure:open
````
Para remover os resultados antigos e gerar um novo relatório, execute o seguinte comando:

````js
npm run allure:clear
````

Para executar todos esses comandos de uma só vez, execute o seguinte comando:

````js
npm run test
````

Com essas configurações e comandos, o ambiente estará pronto para executar os testes do projeto.

Dica para script para Allure.
# package.json
````json
    "cy:run":"npx cypress run --env allure=true", (Executa os testes)
    "allure:generate": "allure generate allure-results", (Gerador de reports)
    "allure:open":"allure open allure-report", (Abrir os reports)
    "allure clear":"rm -r allure-results/ allure-report || true", (Apaga resultados anteriores)
    "test":"npx npm-run-all allure:clear cy:run allure:generate" (Multipla execução de comandos)
````    
