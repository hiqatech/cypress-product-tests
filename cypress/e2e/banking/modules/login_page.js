export class LoginPage {
    
    customer_login = '.borderM > :nth-child(1) > .btn'
    user_select = '#userSelect'
    login_button = 'form.ng-valid > .btn'
    user_welcome = '.fontBig'
    logout_button = '.logout'

    main_url = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'

    clickCustomerLogin() {
        cy.visit(Cypress.config('baseUrl'))
        cy.get(this.customer_login).click()
    }

    selectUser(user) {
        cy.get(this.user_select).select(user)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }

    clickLogout() {
        cy.get(this.logout_button).click()
    }

    loginWithUser(user) {
        this.clickCustomerLogin()
        this.selectUser(user)
        this.clickLogin()
    }

    verifyLoggedInUser(name) {
        cy.get(this.user_welcome).should('have.text', name)
    }

    verifyUserSelect() {
        cy.get(this.user_select).should('be.visible')
    }
    
}

