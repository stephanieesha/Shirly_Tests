import overviewPage from "../pageObject/overviewPage"

describe('Test User Functionalities on Shirly', () => {
    it('should register user, login user, create a new ListName, edit ListName, Create a new List, verify List details, delete List, delete ListName, logout user', () =>{
        cy.visit('https://shirly.onrender.com/')
        overviewPage.whenClickRegisterButton()
        overviewPage.whenRegisterNewUser()
        overviewPage.whenLoginNewUser()
        overviewPage.whenAddNewListName()
        overviewPage.whenAddNewListItem()
        overviewPage.whenVerifyNewListItems()
        overviewPage.whenDeleteListItemsAndListName()
        overviewPage.whenLogOutUser()
    })
})