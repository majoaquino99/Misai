describe('Go to main screen of the WebApp Misai', () => {
    before(() => {
      cy.visit('https://black-beach-0d0cbbf10.azurestaticapps.net/');
    });

    it('The Header should have a link so that the ADMIN can logIn', () => {
        cy.contains('Admin').click();

    });

    it('The form to LogIn should be visble', () => {
        cy.contains('Hello, Admin !');

    });

    it('check that you can access', () => {
        cy.get('#email').type('admin');
        cy.get('#password').type('Adm1n@2020');
        cy.get('.MuiButton-label').click();
        

    });

  });