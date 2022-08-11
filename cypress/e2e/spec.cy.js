

describe('Navigation', () => {
  it('check date loads to loctions page and More Info button can be used', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('button').contains('Start Exploring').click()

    cy.url().should('include', '/locations')

    // Show data has loaded from the data base
       cy.get('a[href*="location/1"]').contains('More Info').click()

    // Shows location page displays and data has been passed down
    cy.contains('Old Pale')

  
  })

  it('Check if filters work', ()=>{


    cy.get('.FilterRegion_dropdown__aSxR8').select('North West')

    cy.get('button').contains('Apply Filter').dblclick()

    cy.contains('Symonds Yat').should('not.exist');

  })


  it('Should check loctions can not be added without loggin in ', ()=> {

    
    cy.get('a[href*="/addlocation"]').contains('Add Location').click()

    cy.contains('Log in first!')
  })
})