//es6 function
import DemoQA  from "../../pageObjects/demoqa.po";

describe('demo qa website', () => {
    //const page = new DemoQA();
  beforeEach(() => {
  cy.visit('/automation-practice-form')
  
  })
   it('test student form registration', () => {
   cy.studentRegistration()  
    
  })


  it.only('test student form registration', () => {
    cy.studentRegistrationForm2() 
     
   })

})
