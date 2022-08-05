/// <reference types= "cypress" />

// Importanto referencias ajv
import Ajv from "ajv";

// Gerando uma nova instancia do Ajv
const ajv = new Ajv()

// Buscando valores do arquivo de configuração cypress.json
const baseUrl = Cypress.env('baseUrl');


describe('Testando contrato da api https://corona.lmao.ninja', () => {
    it('Testando contrato', () => {
        cy.request('GET', `${baseUrl}v3/covid-19/countries/Brasil`,) // Url  
            .then((response) => { // Validações
                cy.fixture('schema') // Referencia para comapação de contrato
                    .then((schema) => {
                        const validate = ajv.compile(schema)
                        const valid = validate(response.body)
                        if (!valid) console.log(validate.erros)
                    })
            })
    });
});