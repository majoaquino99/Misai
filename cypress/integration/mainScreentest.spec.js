describe('Go to main screen of the WebApp Misai', () => {
    before(() => {
      cy.visit('https://black-beach-0d0cbbf10.azurestaticapps.net/');
    });

    it('The The user should be able to see the store logo', () => {
        cy.get('.jss5 > img').should('be.visible');

      });
  
    it('Go to the images carousel with the discounts and View the promotion image', () => {
      cy.get('.slider > :nth-child(2) > div').should('be.visible');
      
    });

    it('When scroll down you shoul be able to see cards with information about the products', () => {
        cy.get(':nth-child(1) > .MuiCardContent-root').should('be.visible');

      });
    
    it('The Header should have buttons to redirect to the differents categories', () => {
        cy.contains('Woman').click();
        cy.contains('Handbags').click();
        cy.contains('Shoes').click();

    });

    it('The Header should have a link so that the ADMIN can logIn', () => {
        cy.contains('Admin').click();

    });
  });

