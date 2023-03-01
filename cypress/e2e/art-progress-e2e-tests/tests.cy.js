describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://art-progress-tracker.web.app/home')
    })
    it('make sure that image clicking works', () =>{
        cy.contains('pergola').click()
        cy.contains('pergola').should('have.text', ' pergola ')
    })

    it('make sure that username clicking works', () =>{
        cy.contains('testemail@gmail.com').click()
        cy.contains('testemail@gmail.com').should('contain', /testemail@gmail.com/)
    })

    it('make sure that image searching works', () =>{
        cy.contains('Search for Images').click()
        cy.get('input[type="text"]').type(`${'boy'}`)
        cy.contains('Search titles').click()
        cy.contains('Boy').should('contain', 'Boy')
    })

    it('make sure that name searching works', () =>{
        cy.contains('Search for Images').click()
        cy.get('input[type="text"]').type(`${'testemail@gmail.com'}`)
        cy.contains('Search users').click()
        cy.contains('testemail@gmail.com').should('contain', 'testemail@gmail.com')
    })

    it('login', () =>{
        cy.contains('Log in').click()
        cy.origin('https://dev-7lul6xrih3fszlxk.us.auth0.com', () => {
            cy.get('#username').type(`${'testemail@gmail.com'}{enter}`)
            cy.get('#password').type(`${'Testpassword1!'}{enter}`)
        })
        cy.contains('Your Page').click()
        cy.contains('testemail@gmail.com').should('contain', /testemail@gmail.com/)
    }) 

    it('image edit', () =>{
        cy.contains('Log in').click()
        cy.origin('https://dev-7lul6xrih3fszlxk.us.auth0.com', () => {
            cy.get('#username').type(`${'testemail@gmail.com'}{enter}`)
            cy.get('#password').type(`${'Testpassword1!'}{enter}`)
        })
        cy.contains('Your Page').click()
        cy.contains('Shasta').click()
        cy.contains('Edit Image').click()
        cy.get('input[placeholder="Write the new title here."]').type(`${'Shasta test edit'}`)
        cy.get('#editImage > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)').click()
        cy.contains('Shasta test edit').should('contain', /Shasta test edit/)
        cy.contains('Edit Image').click()
        cy.get('input[placeholder="Write the new title here."]').type(`${'Shasta'}`)
        cy.get('input[placeholder="Write the new description here."]').type(`${'Definitely not a ripoff'}`)
        cy.get('#editImage > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)').click()
        
    })  
    
  })