describe('Data file entry', () => { 
    it('creating txt file',function(){
        cy.writeFile('log.xls',"Hello world")
    })
    it('creating json file',function(){
        cy.writeFile('log.json',{"name": "Mahamud"})
    })
 })