/// <reference types = "cypress"/>

it('Google Search', () => {

    cy.visit('https://google.com')
    cy.get('#W0wltc > .QS5gu').click()
    cy.get('#APjFqb').type('ATB - My Everything{Enter}')
    cy.contains('Videos',{timeout : 5000}).click()
    //cy.get(':nth-child(1) > :nth-child(1) > .g > :nth-child(1) > :nth-child(1) > .iHxmLe > a > .gY2b2c > .AZJdrc > .kSFuOd').click()
    //cy.origin('https://www.youtube.com', () => {
    //cy.contains('Accept all').click()
    //cy.wait(5000)})

})