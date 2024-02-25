/// <reference types= "cypress" />

// ######################### Implementação #########################
describe('Testando contrato da api Covid19 Brazil API', () => {
    it('Buscando dados registrados de todos os estados', () => {
        cy.getAllstatesBrasilian()
    })
    it('Buscando dados registrados de todos os estados por UF', () => {
        // Chamadas sequenciais da função com siglas de estados
        cy.getReportUf('AC');

    })
    it('Buscando dados registrados por DATA', () => {
        cy.getReportData()
    });
    it('Buscando dados registrados por Pais', () => {
        cy.getPais('Brazil')
    });
    it('Buscando dados registrados por Pais', () => {
        cy.getAllPais()
    });
})