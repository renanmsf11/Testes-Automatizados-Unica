
import './commands'
import './loja.actions'


beforeEach(() => {
    Cypress.on('uncaught:exception', () => {
        return false;
    })
    cy.wait(3000)
    cy.visit('/')
    
})