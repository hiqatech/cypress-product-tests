export class LoginPage {
    
    customer_login = '.borderM > :nth-child(1) > .btn'
    user_select = '#userSelect'
    login_button = 'form.ng-valid > .btn'

    clickCustomerLogin() {
        cy.get(this.customer_login).click()
    }

    selectUser(user) {
        cy.get(this.user_select).select(user)
    }

    clickLogin() {
        cy.get(this.login_button).click()
    }

    loginWithUser(user) {
        this.clickCustomerLogin()
        this.selectUser(user)
        this.clickLogin()
    }
}

