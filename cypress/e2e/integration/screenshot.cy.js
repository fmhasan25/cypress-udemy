describe('Screenshot test', () => { 
    it('Screenshot of full page',function(){
        cy.visit('https://google.com')
        cy.screenshot({capture:"fullPage"})
    })
    it('Screenshot of element',function(){
cy.get('input[name="q"]').screenshot()
    })
    it('Screenshot of box',function(){
cy.get('div[class="o3j99 ikrT4e om7nvf"]').screenshot()
    })
 })