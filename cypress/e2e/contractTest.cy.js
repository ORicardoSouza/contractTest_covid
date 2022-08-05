/// <reference types= "cypress" />


// Pode ser usado em um arquivo de configuração de ambiente também
const baseUrl = "https://disease.sh/"

// ######################### Implementação #########################

describe('Testando contrato da api https://corona.lmao.ninja', () => {
    it('Testando contrato', () => {
        cy.request('GET', `${baseUrl}v3/covid-19/countries/Brasil?yesterday=Brasil&twoDaysAgo=Brasil&strict=Brasil&allowNull=Brasil`,)
            .then((response) => {
                expect(response.status).to.equal(200) // Validações do status da requisição
                expect(response.body.country).equal("Brazil") // Validações do Pais Brazil
               cy.validateSchema('contractSchema', response.body)
            })
    })
})