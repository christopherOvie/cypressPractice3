/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
describe('travering element', () => {
    
  
   it('test menu section traversing list of element', () => {
    cy.visit('http://links.giveawayoftheday.com/demo.guru99.com')

    cy.frameLoaded('#site_iframe')
    
    // cy.iframe("#site_iframe")
    //    .find(".dropdown-toggle")  //parent
    //    .first()
    //     .trigger('mouseover')
    //    .trigger('click')
    //    .next()  //identify all next of elements
    //    .find('li')
    //    .contains('Login')
    //   .click()
    //   .then(()=>{
    //   cy.iframe('#site_iframe')
    //   .contains('Already registered?')
    //   .should('be.visible')
    })
    
  })

})
