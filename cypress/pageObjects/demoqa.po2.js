class DemoQA2{

//This is stateless functions

getFirstname(){
return cy.get("#firstName")
}
//another stateless function
getLastname(){
    return cy.get("#lastName")
}

getEmail(){
    return cy.get("#userEmail")
   
}
selectGender(){
    return cy.get("[type='radio']") 
    
}

enterMobile(){
    return cy.get("#userNumber")
    
}
enterSubject(){
    return cy.get(".subjects-auto-complete__value-container")
    
                  }
selectHobbies(){
    return cy.get("[type='checkbox']")
    
}

//uploadPicture
selectPicture(){
    return cy.get("#uploadPicture")
    
}
enterAddress(){
    return  cy.get("#currentAddress")
    
}


selectState(){
 
    return cy.get('#state > .css-yk16xz-control > .css-1hwfws3') 
         
}
selectCity(){ 
    return  cy.get("#city > .css-yk16xz-control > .css-1hwfws3")
    
}
getSubmit(){
    return cy.get('#submit')    
}
verifyMessage(){
    return cy.get("#example-modal-sizes-title-lg")
   
}

clickClose(){
    return '#closeLargeModal'
  
}
}
export default DemoQA2;