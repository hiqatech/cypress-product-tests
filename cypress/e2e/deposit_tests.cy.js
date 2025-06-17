
import {LoginPage} from "./Pages/login_page"
import {DepositPage} from "./Pages/deposit_page"
import {TransactionPage} from "./Pages/transaction_page"

const loginPage = new LoginPage()
const depositPage = new DepositPage()
const transactionPage = new TransactionPage()

beforeEach(function(){
    cy.visit(Cypress.env('baseUrl'))
})

describe('Banking project', () => {
  it('Deposit Test', () => {

    loginPage.loginWithUser('Harry Potter')

    depositPage.makeDeposit(100)
    depositPage.verifyBalance(100)
 
    depositPage.makeDeposit(10)
    depositPage.verifyBalance(110)

    depositPage.makeDeposit(5)
    depositPage.verifyBalance(115)

    transactionPage.clickTransactions()
    transactionPage.verifyTransactionX(0,100)
    transactionPage.verifyTransactionX(1,10)
    transactionPage.verifyTransactionX(2,5)
    transactionPage.clickBack()

  })
})
