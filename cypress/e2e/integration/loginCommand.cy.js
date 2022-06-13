describe('Custom commands', () => { 
    it('should login using custom command',function(){
        cy.visit('https://www.facebook.com')
        cy.login('username','password')
    })
 })