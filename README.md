# README

![Cypress Logo](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)

Este repositório contém testes funcionais automatizados utilizando o framework Cypress. 
Os testes são projetados para verificar a funcionalidade e comportamento de uma api simples com Gets

## Instalação

Antes de executar os testes, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.
Siga os passos abaixo para configurar e executar os testes:

1. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/ORicardoSouza/contractTest_covid.git
cd nome-do-repositorio
```

2. Instale as dependências do projeto usando o npm:

```bash
npm install
```

## Executando os Testes

Para executar os testes, você pode utilizar os seguintes comandos:

- Executar testes no modo headless (sem interface gráfica):

```bash
npm run deleteResults && npm run deleteScreenshots && npm run cy:run
```

- Executar testes com interface gráfica:

```bash
npm run cy:open
```

Os testes serão executados automaticamente em segundo plano e você verá os resultados no terminal.

---

## Bibliotecas Utilizadas

- **Cypress**: Ferramenta de teste de frontend end-to-end que permite escrever e executar testes em navegadores.
  - Versão: ^13.6.5
  - [Documentação](https://docs.cypress.io/guides/overview/why-cypress.html)

- **Mocha JUnit Reporter**: Reporter para Mocha que gera arquivos de saída no formato JUnit XML, útil para integração com sistemas de integração contínua.
  - Versão: ^2.2.1
  - [GitHub](https://github.com/michaelleeallen/mocha-junit-reporter)

- **Moment Timezone**: Biblioteca para manipulação de datas e horas, especialmente focada em fusos horários.
  - Versão: ^0.5.45
  - [Documentação](https://momentjs.com/timezone/)

- **Node Localstorage**: Implementação do LocalStorage do navegador para Node.js, útil para simular o comportamento do navegador em testes.
  - Versão: ^3.0.5
  - [GitHub](https://github.com/lmaccherone/node-localstorage)

- **Open**: Utilitário para abrir URLs, arquivos e executáveis.
  - Versão: ^10.0.3
  - [GitHub](https://github.com/sindresorhus/open)

- **XmlDom**: Implementação de DOM e XML para Node.js.
  - Versão: ^0.6.0
  - [GitHub](https://github.com/jindw/xmldom)

- **Git Repo Name**: Obtenha o nome do repositório Git a partir de uma URL.
  - Versão: ^1.0.1
  - [GitHub](https://github.com/jonschlinkert/git-repo-name)

- **Cypress Plugin API**: API para criar plugins para o Cypress.
  - Versão: ^2.11.1
  - [Documentação](https://docs.cypress.io/guides/tooling/plugins-guide.html)

## Contribuição

Contribuições são bem-vindas!

--- 
