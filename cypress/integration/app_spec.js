describe('Secret Message', function() {
  it('message url responds to get request', function() {
    cy.visit('/message')
  })

  it('get request to message page renders encoded message', function() {
    cy.contains('foo123')
  })

  it('has a multiple choice question', function() {
    cy.get('[type="radio"]').first().check()
  })

  it('submitting form makes post request to /decrypt', function() {
    cy.get('form').submit()
    cy.url().should('include', '/decrypt')
  })

  it('the wrong answer does not decrypt message', function() {
    cy.visit('/message')
    cy.get('[type="radio"]').last().check()
    cy.get('form').submit()
    cy.contains('wrong answer')
  })

  it('the right answer decrypts the message', function() {
    cy.visit('/message')
    cy.get('[type="radio"]').first().check()
    cy.get('form').submit()
    cy.contains('Decrypted message')
  })

})
