describe('Woman product selection', () => {
  before(() => {
    cy.visit('https://black-beach-0d0cbbf10.azurestaticapps.net/');
  });

  it('Go to the Woman Category', () => {
    cy.get('form > [value="1"] > .MuiButton-label').click();
    // In case we have a way to validate we are in woman category, add an assertion
  });

  it('View a product', () => {
    cy.get(
      ':nth-child(2) > .MuiCardContent-root > .MuiTypography-gutterBottom > .MuiButtonBase-root > .MuiButton-label'
    ).click();
    // Validate product information is avaiable
    cy.contains('Sizes');
    cy.contains('Price');
    cy.contains('Color');
    cy.contains('Quantity');

    cy.get('.jss18 > .MuiButtonBase-root > .MuiButton-label').should(
      'be.visible'
    );
  });
});
