/// <reference types= "cypress" />

// ######################### Implementação #########################
describe('Testando contrato da api Covid19 Brazil API usando com switch', () => {
    it('Buscando dados registrados de todos os estados', () => {
        cy.getAllStatesBrasilian()
    })
    it('Buscando dados registrados de todos os estados', () => {
        const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
        
        ufs.forEach(uf => {
            switchFunction('getReportUf', uf);
        });
    });
    it('Buscando dados registrados por DATA', () => {
        switchFunction('getReportData');
    });
    it('Buscando dados registrados por Nome de Pais', () => {
        switchFunction('getPais', 'Brazil');
    });
    it('Buscando dados registrados por Pais', () => {
        switchFunction('getAllPais');
    });
});

function switchFunction(action, parameter) {
    switch (action) {
        case 'getAllStatesBrasilian':
            cy.getAllStatesBrasilian();
            break;
        case 'getReportUf':
            cy.getReportUf(parameter);
            break;
        case 'getReportData':
            cy.getReportData();
            break;
        case 'getPais':
            cy.getPais(parameter);
            break;
        case 'getAllPais':
            cy.getAllPais();
            break;
        default:
            console.error('Função não reconhecida.');
    }
}