/// <reference types = "cypress"/>

import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()


beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com')
})

describe('All Login Tests', function (){

    it('Login with incorrect username', () => {
    loginPage.enterUsername('Admina')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-tab').click()
    })

    it('Login with incorrect password', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123e')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()
    })
})

it('Login with correct credentials', () => {
    loginPage.login('Admin','admin123')
    cy.get('.oxd-userdropdown-tab').click()
})

    