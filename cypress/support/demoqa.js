//import DemoQA  from "../pageObjects/demoqa.po";
import DemoQA  from "../pageObjects/demoqa.po"
import DemoQA2 from "../pageObjects/demoqa.po2";


const page = new DemoQA();
const page2 = new DemoQA2();

Cypress.Commands.add('studentRegistration',()=>{

    cy.fixture('testdata').then((data)=>{
        
        page.enterFirstname(data.firstName)
        page.enterLastname(data.lastName)
        page.enterEmail(data.email)
        page.selectGender()
         page.enterMobile(data.phoneNumber)
         
         page.enterSubject(data.subject)
        page.selectHobbies()
        page.selectPicture(data.picture)
        page.selectState(data.state)
        page.selectCity(data.city)
        page.clickSubmit()
        page.verifyMessage(data.message)
        page.clickClose()
    })   
})


Cypress.Commands.add('studentRegistrationForm2',()=>{

    cy.fixture("testdata").then((data)=>{
    //    page2.getFirstname().type(data.firstName)
    //    page2.getLastname().type(data.lastName) 
    //    page2.getEmail().type(data.email)
    //    page2.getSubmit().click({force:true})
    
page2.getFirstname().clear().type(data.firstName).should('have.value',data.firstName)
    page2.getLastname().clear().type(data.lastName).should('have.value',data.lastName)
    page2.getEmail().clear().type(data.email).should('have.value',data.email)
    page2.enterSubject().type(data.subject)
    page2.getSubmit().click({force:true})
       
    })   
})