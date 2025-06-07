describe('Banking project', () => {
  it('Deposit Test', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

    cy.contains('Customer Login').click()
    cy.get('#userSelect').select('Harry Potter')
    cy.contains('Login').click()

    cy.contains('Deposit').click()
    cy.get('[placeholder="amount"]').type('100')
    cy.get('[type="submit"]').click()
    cy.contains('Deposit Successful').should('be.visible')
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text', '100')
    cy.wait(1000)
    cy.contains('Transactions').click()
    cy.get('#anchor0 > :nth-child(2)').should('have.text', '100')
    cy.contains('Back').click()
    cy.contains('Deposit').click()

    cy.get('[placeholder="amount"]').type('10')
    cy.get('[type="submit"]').click()
    cy.contains('Deposit Successful').should('be.visible')
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text', '110')
    cy.wait(1000)
    cy.contains('Transactions').click()
    cy.get('#anchor1 > :nth-child(2)').should('have.text', '10')
    cy.contains('Back').click()
    cy.contains('Deposit').click()

    cy.get('[placeholder="amount"]').type('5')
    cy.get('[type="submit"]').click()
    cy.contains('Deposit Successful').should('be.visible')
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text', '115')
    cy.wait(1000)
    cy.contains('Transactions').click()
    cy.get('#anchor2 > :nth-child(2)').should('have.text', '5')
    cy.contains('Back').click()


  })
})