describe('demo', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-storybook-atomic-root').should('exist');
  });
});
