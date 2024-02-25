/// <reference types= "cypress" />
import { getAllStatesBrasilian, getReportUf, getReportData, getPais, getAllPais } from "../services/apis/apis";
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
var ano = data.getFullYear();
// Adiciona um zero à esquerda para dias e meses menores que 10
if (dia < 10) { dia = '0' + dia; }
if (mes < 10) { mes = '0' + mes; }
var data = ano + mes + dia;

Cypress.Commands.add('getAllStatesBrasilian', () => {
    getAllStatesBrasilian().then((response) => {
        expect(response.status).to.eq(200);
        const contrato = {
            "data": [
                {
                    "uid": 35,
                    "uf": "SP",
                    "state": "São Paulo",
                    "cases": 6650301,
                    "deaths": 180978,
                    "suspects": 5334,
                    "refuses": 596,
                    "datetime": "2023-08-11T17:33:38.421Z"
                }
            ]
        };
        let contratosValidados = 0;
        contrato.data.forEach(item => {
            if (
                'uid' in item && 'uf' in item &&
                'state' in item && 'cases' in item &&
                'deaths' in item && 'suspects' in item &&
                'refuses' in item && 'datetime' in item
            ) {
                if (typeof item.uid === 'number' && typeof item.uf === 'string' &&
                    typeof item.state === 'string' && typeof item.cases === 'number' &&
                    typeof item.deaths === 'number' && typeof item.suspects === 'number' &&
                    typeof item.refuses === 'number' && typeof item.datetime === 'string'
                ) { contratosValidados++; }
            }
        });
        expect(contratosValidados).to.equal(contrato.data.length);
    });
});

Cypress.Commands.add('getReportUf', (UF) => {
    getReportUf(UF).then((response) => {
        expect(response.status).to.eq(200);
        const contrato = response.body;
        // Verifica se a estrutura do contrato é válida
        if (
            contrato && contrato.uf && contrato.state &&
            typeof contrato.cases === 'number' &&
            typeof contrato.deaths === 'number' &&
            typeof contrato.suspects === 'number' &&
            typeof contrato.refuses === 'number' &&
            contrato.datetime
        ) { cy.log("O contrato possui os campos necessários e nos tipos esperados."); }
        else { cy.log("O contrato não possui todos os campos necessários ou os tipos esperados não correspondem."); }
    });
});

Cypress.Commands.add('getReportData', () => {
    getReportData(`${data}`).then((response) => {
        expect(response.status).equal(200);
        expect(response.body).not.null;
    })
});

Cypress.Commands.add('getPais', (pais) => {
    getPais(`${pais}`).then((response) => {
        if (response.status === 200) {
            expect(response.status).equal(200);
            expect(response.body).not.null;
            // Objeto recebido
            var contratoRecebido = response.body;
            // Verifica os tipos de dados das propriedades
            expect(typeof contratoRecebido.data.country).to.equal('string');
            expect(typeof contratoRecebido.data.cases).to.equal('object');
            expect(typeof contratoRecebido.data.confirmed).to.equal('number');
            expect(typeof contratoRecebido.data.deaths).to.equal('number');
            expect(typeof contratoRecebido.data.recovered).to.equal('object');
            expect(typeof contratoRecebido.data.updated_at).to.equal('string');
            cy.log(`Status e contrato validado com sucesso`);
        }
        else { cy.log(`Validação retornou erro`) };

    });
});

Cypress.Commands.add('getAllPais', (pais) => {
    getAllPais(`${pais}`).then((response) => {
        if (response.status === 200) {
            expect(response.status).to.equal(200);
            expect(response.body).not.null;
            // Array recebido
            var contratosRecebidos = response.body.data;
            // Contador para o número de contratos verificados com sucesso
            var contratosValidados = 0;
            // Itera sobre cada objeto no array
            contratosRecebidos.forEach(contrato => {
                // Verifica se a estrutura do contrato é válida
                if (
                    contrato && contrato.country && typeof contrato.cases === 'object' &&
                    typeof contrato.confirmed === 'number' && typeof contrato.deaths === 'number' &&
                    typeof contrato.recovered === 'object' && contrato.updated_at
                ) { contratosValidados++; }
            });
            // Verifica se todos os contratos foram verificados com sucesso
            expect(contratosValidados).to.equal(contratosRecebidos.length);
            cy.log(`Todos os ${contratosValidados} contratos foram validados com sucesso`);
        } else {
            cy.log(`Validação retornou erro`);
        }
    });
});
;