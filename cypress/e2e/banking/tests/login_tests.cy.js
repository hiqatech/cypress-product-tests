import {LoginPage} from "../modules/login_page"


const loginPage = new LoginPage()


describe('Banking project', () => {

  it('Login Test', () => {
    loginPage.loginWithUser('Ron Weasly')
    loginPage.verifyLoggedInUser('Ron Weasly')
  })

  it('Logout Test', () => {
    loginPage.loginWithUser('Ron Weasly')
    loginPage.clickLogout
    loginPage.verifyUserSelect
  })


  })