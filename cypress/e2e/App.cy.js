describe('Tests', () => {
  it('should render Pride and Prejudice', () => {
    cy.visit('<Network address>:5173/'); // Copy and paste the network address. Note: localhost will not work
    cy.contains('Pride and Prejudice').should('exist');
  });

  it('should click on the first Add to Cart button', () => {
    cy.visit('<Network address>:5173/');
    cy.get('[data-testid="add-to-cart-1"]').click();
  });
});
