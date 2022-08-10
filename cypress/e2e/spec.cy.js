

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="locations"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/locations')

    // The new page should contain an h1 with "About page"
    cy.get('a[href*="location/1"]').contains('More Info').click()

    cy.get('h1').contains('Old Pale')
  })

  it('should login', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="login"]').click()


  })
})