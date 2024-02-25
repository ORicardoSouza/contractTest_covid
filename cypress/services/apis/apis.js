function getAllstatesBrasilian() {
    return cy.api({
        method: 'GET',
        url: `/api/report/v1`,
        headers: { 'Accept': 'application/json' },
    });
}

function getReportUf(UF) {
    return cy.api({
        method: 'GET',
        url: `api/report/v1/brazil/uf/${UF}`,
        headers: { 'Accept': 'application/json' },
    });
}

function getReportData(data) {
    return cy.api({
        method: 'GET',
        url: `api/report/v1/brazil/${data}`,
        headers: { 'Accept': 'application/json' },
    });
}

function getPais(nomePais) {
    return cy.api({
        method: 'GET',
        url: `/api/report/v1/${nomePais}`,
        headers: { 'Accept': 'application/json' },
    });
}

function getAllPais() {
    return cy.api({
        method: 'GET',
        url: `/api/report/v1/countries`,
        headers: { 'Accept': 'application/json' },
    });
}

export { getAllstatesBrasilian, getReportUf, getReportData, getPais, getAllPais };