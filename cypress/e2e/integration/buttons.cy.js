/*
1. visit example.com
2. validate url has certain property
3. implicit wait for 3 seconds
4. pause the system
5. validate certain element contains certain text
6. reload the system
*/

describe('Redoing the previous project for better understanding         ', () => { 
    it('navigating to the browser',function(){
        cy.visit('https://books.toscrape.com/index.html',{timeout:10000})
    })
    it('validating url containig certain properties',function(){
        cy.url().should('include','index.html')
        cy.log('Website was Loaded')
    })
     it('should click on Travel category',function(){
      
        //get tag which contains travel and then operation
        cy.get('a')
            .contains('Travel')
            .click()

        })
        //get element and its length is equal 11
        it('shoudl display correct number of books',function(){
            cy.get('.product_pod').its('length').should('eq',11)
        })

    //Poetry
 it('Clicking Poetry',function(){
    cy.get('a').contains('Poetry').click()
    //cy.get(':nth-child(22) > a').click()
})
//olio
it('clicking Olio',function(){
    //cy.get(':nth-child(4) > .product_pod > .image_container > a > .thumbnail').click()
cy.get('a').contains('Olio').click
})
//23.88
it('assertion of the price',function(){
    cy.get('.price_color').contains('£23.88')
})
    // it('pausing the system',function(){
    //     cy.pause()
    // })
    // it('validating the element',function(){
    //     cy.get('h1').should('be.visible')
    // })
    it('Reload',function(){
        cy.log('Before reload')
        cy.reload()
        cy.log('After reload')
    })
 })

 