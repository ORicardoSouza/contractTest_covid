function getCoutry() {
    return cy.api({
        method: 'GET',
        url: `v3/covid-19/countries/Brasil?yesterday=Brasil&twoDaysAgo=Brasil&strict=Brasil&allowNull=Brasil`,
        headers: { 'Accept': 'application/json' },
    })
}
export { getCoutry }