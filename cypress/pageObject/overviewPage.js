import * as locators from '../locators/shirly.locators'

class overviewPage{
    constructor() {
        this.newUserName = 'Fairy'
        this.newUserEmail = 'treyFairy@gmail.com'
        this.newUserPassword = 'Trery1234'
        this.newUserConfirmPassword = 'Trery1234'
        this.newListName = 'Pet Food'
        this.editedListName = 'Trey and Fairy Food'
        this.addListItemName = 'Gocat'
        this.addListItemBrand = 'Kibble'
        this.addListItemQuantity = '6'
        this.addListItemUnitprice = '4530'
        this.addListItemFrequency = 'Every 2 days'
        this.addListItemComment = 'Fairy prefers the chicken to the tuna flavour'
    }

    elements = {
        registerButton: () => cy.get(locators.registerButton),
        userFullName: () => cy.get(locators.userFullName),
        userEmail: () => cy.get(locators.userEmail),
        userPassword: () => cy.get(locators.userPassword),
        confirmUserPassword: () => cy.get(locators.confirmUserPassword),
        submitNewUserButton: () => cy.get(locators.submitNewUserButton),
        loginButton: () => cy.get(locators.loginButton),
        listName: () => cy.get(locators.listName),
        editlistNameitem: () => cy.get(locators.editlistNameitem),
        listNameitem: () => cy.get(locators.listNameitem),
        ListNameDetailsButton: () => cy.get(locators.ListNameDetailsButton),
        addItemButton: () => cy.get(locators.addItemButton),
        listItemName: () => cy.get(locators.listItemName),
        listItemBrand: () => cy.get(locators.listItemBrand),
        listItemQuantity: () => cy.get(locators.listItemQuantity),
        listItemUnitPrice: () => cy.get(locators.listItemUnitPrice),
        listItemFrequency: () => cy.get(locators.listItemFrequency),
        listItemComment: () => cy.get(locators.listItemComment),
        listItemDetails: () => cy.get(locators.listItemDetails),
        listItemNameDetails: () => cy.get(locators.listItemNameDetails),
        listItemBrandDetails: () => cy.get(locators.listItemBrandDetails),
        listItemQuantityDetails: () => cy.get(locators.listItemQuantityDetails),
        listItemUnitPriceDetails: () => cy.get(locators.listItemUnitPriceDetails),
        listItemFrequencyDetails: () => cy.get(locators.listItemFrequencyDetails),
        listItemCommentDetails: () => cy.get(locators.listItemCommentDetails),
        backButton: () => cy.get(locators.backButton),
        deleteListItem: () => cy.get(locators.deleteListItem),
        deleteListNameItem: () => cy.get(locators.deleteListNameItem),
        logOutButton: () => cy.get(locators.logOutButton),
    }

    whenClickRegisterButton(){
        this.elements.registerButton().click()
    }

    whenRegisterNewUser(){
        this.elements.userFullName().type(`${this.newUserName}{enter}`)
        this.elements.userEmail().type(`${this.newUserEmail}{enter}`)
        this.elements.userPassword().type(`${this.newUserPassword}{enter}`)
        this.elements.confirmUserPassword().type(`${this.newUserConfirmPassword}{enter}`)
        this.elements.submitNewUserButton().eq(0).click()
    }

    whenLoginNewUser(){
        this.elements.loginButton().click()
        this.elements.userEmail().type(`${this.newUserEmail}{enter}`)
        this.elements.userPassword().type(`${this.newUserPassword}{enter}`)
    }

    whenAddNewListName(){
        this.elements.listName().type(`${this.newListName}{enter}`)
        this.elements.editlistNameitem().eq(0).clear()
        this.elements.editlistNameitem().eq(0).type(`${this.editedListName}{enter}`)
        this.elements.listNameitem().eq(0).click()
    }

    whenAddNewListItem(){
        this.elements.ListNameDetailsButton().eq(0).click()
        this.elements.addItemButton().eq(3).click()
        this.elements.listItemName().type(`${this.addListItemName}`)
        this.elements.listItemBrand().type(`${this.addListItemBrand}`)
        this.elements.listItemQuantity().type(`${this.addListItemQuantity}`)
        this.elements.listItemUnitPrice().type(`${this.addListItemUnitprice}`)
        this.elements.listItemFrequency().select(this.addListItemFrequency)
        this.elements.listItemComment().type(`${this.addListItemComment}{enter}`)
    }

    whenVerifyNewListItems(){
        this.elements.listItemDetails().eq(2).click()
        this.elements.listItemNameDetails().contains(this.addListItemName)
        this.elements.listItemBrandDetails().contains(this.addListItemBrand)
        this.elements.listItemQuantityDetails().contains(this.addListItemQuantity)
        this.elements.listItemUnitPriceDetails().contains(this.addListItemUnitprice)
        this.elements.listItemFrequencyDetails().contains(this.addListItemFrequency)
        this.elements.listItemCommentDetails().contains(this.addListItemComment)
    }

    whenDeleteListItemsAndListName(){
        this.elements.backButton().click()
        this.elements.deleteListItem().eq(0).click()
        this.elements.backButton().click()
        this.elements.deleteListNameItem().eq(0).click()
    }

    whenLogOutUser(){
        this.elements.logOutButton().eq(0).click()
    }

}
export default new overviewPage()