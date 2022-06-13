

describe('Working with inputs', () => { 
it('navigating to the websitre',function(){
    cy.visit('https://www.facebook.com/')
    cy.clearCookies({log: true})
    cy.clearLocalStorage('your item',{log:true})
})
it('should fill username ',function(){
    cy.get('[data-testid="royal_email"]').type('fmhasan',{delay: 50})
})
it('should fill password',function(){
    cy.get('[data-testid="royal_pass"]').type('hello',{delay:50})
})
it('should submit login form',function(){
    cy.get('[data-testid="royal_login_button"]').click()
})
it('should display error message',function(){
    cy.get('.uiHeaderTitle').should('be.visible').and('contain',"Your Request Couldn't be Processed")
})
// it('should clear the id box',function(){
//     cy.get('[data-testid="royal_email"]').clear()
// })
// it('clear passport',function(){
//     cy.get('[data-testid="royal_pass"]').clear()
// })

})
