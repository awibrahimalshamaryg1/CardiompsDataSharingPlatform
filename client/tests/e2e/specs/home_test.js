// https://docs.cypress.io/api/introduction/api.html

describe('Login Page', () => {
  it("login page loads",()=>{

    cy.visit('/sign-in');
    cy.get("#email").should("exist")

  })

  it("user can input into fields", ()=>{
    
    cy.get("#email").type("you33@firebase.com");
    cy.get("#password").type("123456");

  })

  it("user can login", ()=> {
    
    cy.get("#login-form > form > button").click();

    cy.contains("What's new")
  })

  it("user can logout", ()=> {
    
    cy.get("#navbarTogglerDemo03 > div > a").click();

    cy.contains("Sign in below")
  })

})
