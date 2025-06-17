export class DepositPage {
    
    deposit_button = '[ng-class="btnClass2"]'
    deposit_textbox = '[placeholder="amount"]'
    submit_button = '[type="submit"]'
    deposit_successful = '//*[text()="Deposit Successful"]'
    balance_amount = '.borderM > :nth-child(3) > :nth-child(2)'

    clickDeposit() {
        cy.get(this.deposit_button).click()
    }

    enterDeposit(deposit) {
        cy.get(this.deposit_textbox).type(deposit)
    }

    clickSubmit() {
        cy.get(this.submit_button).click()
    }

    checkSucessful() {
        cy.get(this.submit_button).should('be.visible')
    }

    verifyBalance(balance) {
        cy.get(this.balance_amount).should('have.text', balance)
        cy.wait(1000)
    }

    makeDeposit(deposit) {
        this.clickDeposit()
        this.enterDeposit(deposit)
        this.clickSubmit()
        this.checkSucessful()
    }
}

