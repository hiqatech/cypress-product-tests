/// <reference types = "cypress"/>
/// <reference types = "cypress-downloadfile"/>

it('File Upload', () => {
    cy.visit('https://trytestingthis.netlify.app')
    cy.get('#myfile').attachFile('example.json')

})

it('File Download', () => {
    cy.downloadFile('https://uploadwikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})