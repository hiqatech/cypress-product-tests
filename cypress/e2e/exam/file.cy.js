/// <reference types = "cypress"/>

before('File', () => {
    cy.fixture('example.json').as('test_data')
})

it('Read File using Fixture', () => {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Read File', () => {
    cy.fixture('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Write File', () => {
    cy.writeFile('sammple.txt','Hello')
    cy.writeFile('sammple.txt','Cypress',{flag:'a+'})
})