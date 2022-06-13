describe('Device test', () => { 
    it('720p',function(){
        cy.viewport(1280,720)
        cy.visit('https://www.example.com')
        cy.wait(3500)
        cy.title().should('contain','Example Domain')

    })
    it('1080p',function(){
        cy.viewport(1980,1080)
        cy.visit('https://www.example.com')
        cy.wait(3500)
    })
    it('iPhone X',function(){
        cy.viewport('ipad-mini')
        cy.visit('https://www.example.com')
        cy.wait(3500)
    })
    it('Macbook 15',function(){
        cy.viewport('macbook-15')
        cy.visit('https://www.example.com')
        cy.wait(3500)
    })
 })