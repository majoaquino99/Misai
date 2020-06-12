describe('Go to main screen of the WebApp Misai', () => {
    before(() => {
      cy.visit('https://black-beach-0d0cbbf10.azurestaticapps.net/');
    });

    it('Click on the button for the category woman, to see if show cards with information about the products of that category', () => {
        cy.get('form > [value="1"] > .MuiButton-label').click();
        // In case we have a way to validate we are in woman category, add an assertion

      });

    it('When scroll down you shoul be able to see cards with information about the products', () => {
        cy.get(':nth-child(1) > .MuiCardContent-root').should('be.visible');

      });
    
    it('the card should have a button to "see" the product information to clicking', () => {
        cy.contains('View');
        cy.get(':nth-child(1) > .MuiCardContent-root > .MuiTypography-subtitle1 > .MuiButtonBase-root > .MuiButton-label').click();

    });

    it('the card should have a button to back to the main page', () => {
        cy.contains('Back');
        cy.get('[style="margin-top: 20px;"] > .MuiButton-label').click();

    });

    it('the header buttons shoul be clicked', () => {
        cy.get('form > [value="1"]').click()

    });

  });
  