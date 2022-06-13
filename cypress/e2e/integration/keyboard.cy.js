describe('Keyboard operation testing', () => { 
    it('navigating to google websiter',function(){
        cy.visit('https://google.com')
    })
    it('inserting text',function(){
        cy.get('.gLFyf').type('soccer {enter}')
    })
 })