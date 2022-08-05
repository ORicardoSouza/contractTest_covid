// Usnado referencias do cypress
/// <reference types= "cypress" /> 

// Importanto referencias ajv
import Ajv from "ajv";

// Gerando uma nova instancia do Ajv
const ajv = new Ajv()

const baseUrl = "https://disease.sh/"

// ######################### Implementação #########################

describe('Testando contrato da api https://corona.lmao.ninja', () => {
    it('Testando contrato', () => {
        cy.request('GET', `${baseUrl}v3/covid-19/countries/Brasil`,) // Url  
            .then((response) => { // Validações
                cy.fixture('schema') // Arquivo de referencia para comparação de contrato
                    .then((schema) => {
                        const validate = ajv.compile(schema)
                        const valid = validate(response.body)
                        cy.log(response.body) // Exibindo log dentro do Cypress
                        console.log(response.body) // Exibindo o log no inspector da pagina
                        if (!valid) console.log(validate.erros) // Essa condição exive erro caso o contrato seja alterado  
                    })
            })
    });
});