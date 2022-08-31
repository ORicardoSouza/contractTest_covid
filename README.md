# contractTest_covid
Projeto simples de automação de teste de contrato.

Nesse projeto utilizei o framework do cypress

Referências Cypress:
https://www.cypress.io/

Referências Ajv:
https://ajv.js.org/

Allure report:
https://www.npmjs.com/package/@shelex/cypress-allure-plugin

Comandos para Allure
No arquivo package.json
    "cy:run":"npx cypress run --env allure=true", (Executa os testes)
    "allure:generate": "allure generate allure-results", (Gerador de reports)
    "allure:open":"allure open allure-report", (Abrir os reports)
    "allure clear":"rm -r allure-results/ allure-report || true", (Apaga resultados anteriores)
    "test":"npx npm-run-all allure:clear cy:run allure:generate" (Multipla execução de comandos)


Obs: 
Na Pasta Teste via Postam, existe uma arquivo com a collection de teste básico via postman.

