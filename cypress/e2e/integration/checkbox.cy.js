describe('Scroll down test',function(){
it('scroll down',function(){
    cy.visit('https://example.cypress.io/commands/actions')
})
it('scroll action',function(){
    cy.contains('.check').scrollIntoView()
})
it('checking boxes',function(){
    cy.get('.action-checkboxes > :nth-child(1) > label > input').as('checkbox')
    cy.get('@checkbox').check().should('be.checked')
})
it('uncheck boxes',function(){
    cy.get('.action-checkboxes > :nth-child(1) > label > input').uncheck().should('not.be.checked')
})
})