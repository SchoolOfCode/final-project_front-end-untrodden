

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('button').contains('Start Exploring').click()

    // The new url should include "/about"
    cy.url().should('include', '/locations')

    // Show data has loaded from the date base
    cy.get('a[href*="location/1"]').contains('More Info').click()

    // Shows location page displays and data has been passed down
    cy.get('h1').contains('Old Pale')

    //Shows nav bar links work
    cy.get('a[href*="/addlocation"]').contains('Add Location').click()

    // Shows user have to be signed in to add location 
    cy.contains('Log in first!')
  })

  
})