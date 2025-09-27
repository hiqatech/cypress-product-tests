import {LoginPage} from "../modules/login_page"
import {DepositPage} from "../modules/deposit_page"
import {TransactionPage} from "../modules/transaction_page"

const loginPage = new LoginPage()
const depositPage = new DepositPage()
const transactionPage = new TransactionPage()

describe('Banking project', () => {

  it('Deposit 1 Test', () => {
    loginPage.loginWithUser('Ron Weasly')

    depositPage.makeDeposit(100)
    depositPage.verifyBalance(100)

    transactionPage.clickTransactions()
    transactionPage.verifyTransactionX(0,100)
    transactionPage.clickBack()
  })

  it('Deposit 3 Test', () => {
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


// npx cypress run --spec "cypress/e2e/banking/tests/deposit_tests.cy.js" --browser chrome --headed --config baseUrl=https://your-custom-url.com
// npx cypress run --e2e