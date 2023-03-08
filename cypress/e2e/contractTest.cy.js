/// <reference types= "cypress" />
import * as getContry from "../services/getCountry";
// ######################### Implementação #########################
describe('Testando contrato da api https://corona.lmao.ninja', () => {
    it('Testando contrato', () => {
        cy.section(`Testando Plugins`)
        getContry.getCoutry().then((resGetContry) => {        
            expect(resGetContry.status).to.equal(200) // Validações do status da requisição
            expect(resGetContry.body.country).equal("Brazil") // Assert do Pais Brazil
            cy.validateSchema('contractSchema', resGetContry.body);
        })
        //cy.step(`asserções`)
    })
})