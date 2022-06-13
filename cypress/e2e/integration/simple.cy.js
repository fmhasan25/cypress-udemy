describe('Browser Actions', () => {
    it('should load correct url',()=>{
        //navigating to browser and putting time to give exception
        cy.visit('https://example.com',{timeout:10000})
    })
    //Assertion: url should include certain text
    it('should check correct url',function(){
        cy.url().should('include','example.com')
    })
    it('should wait for 3 seconds',function(){
        //implicit wait
        cy.wait(3500)
    })
    it('should pause the execution',function(){
        cy.pause()
    })
    //Assertion: get something which is visible
    it('should check for correct element on the page',function(){
        cy.get('h1').should('be.visible')
    })
 })

  