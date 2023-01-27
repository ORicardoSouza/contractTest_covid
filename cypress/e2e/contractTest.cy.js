/// <reference types= "cypress" />

    // ######################### Implementação #########################

describe('Testando contrato da api https://corona.lmao.ninja', () => {
    it('Testando contrato', () => {
        cy.api({
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            url: `v3/covid-19/countries/Brasil?yesterday=Brasil&twoDaysAgo=Brasil&strict=Brasil&allowNull=Brasil`,
        })
            .then((response) => {
                expect(response.status)
                    .to.equal(200) // Validações do status da requisição
                expect(response.body.country)
                    .equal("Brazil") // Validações do Pais Brazil
                cy.validateSchema('contractSchema', response.body);
            })
    })
})