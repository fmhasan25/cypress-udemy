describe('Login with Fixture Data', () => { 
    it('should try to login',function(){
        cy.visit("https://www.facebook.com")
        cy.wait(3500)

        cy.fixture('user').then((user)=>{
            const username = user.username
            const password = user.password
     
        cy.get('[data-testid="royal_email"]').type(username)
        cy.get('[data-testid="royal_pass"]').type(password)
        
    })
    })
 })