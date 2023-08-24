describe('template spec @suiteTag', { retries: 1 },() => {

  it('passes @P1', () => {
    cy.visit('https://example.cypress.io')
  })
  
  it('should throw @P2', function () {
    throw new Error('Fail on Purpose');
  });
})