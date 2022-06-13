describe('Read data', () => { 
    it('read from txt',function(){
        cy.readFile('log.txt').should('eq',"Hello world")
    })
    it('read from json',function(){
        cy.readFile('log.json').its('name').should('eq','Mahamud')
    })
 })