export class TransactionPage {
    
    transactions_button = '[ng-class="btnClass1"]'
    transactionx_amount = '#anchor0 > :nth-child(2)'
    back_button = '.fixedTopBox > [style="float:left"]'

    clickTransactions() {
        cy.get(this.transactions_button).click()
    }

    verifyTransactionX(x, amount) {
        cy.get(this.transactionx_amount.replace('0', x)).should('have.text', amount)
    }

    clickBack() {
        cy.get(this.back_button).click()
    }
   
}

