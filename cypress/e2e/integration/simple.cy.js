describe('Browser Actions', () => {
    it('should load correct url',()=>{
        cy.visit('https://example.com',{timeout:10000})
    })
    //Assertion: url should include certain text
    it('should check correct url',function(){
        cy.url().should('include','example.com')
    })
    //Assertion: get something which is visible
    it('should check for correct element on the page',function(){
        cy.get('h1').should('be.visible')
    })
 })

  