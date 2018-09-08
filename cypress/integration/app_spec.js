describe('Secret Message', function() {
  it('message url responds to get request', function() {
    cy.visit('/message')
  })

  it('get request to message page renders encoded message', function() {
    cy.contains('foo123')
  })
})
