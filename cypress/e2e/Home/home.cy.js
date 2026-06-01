

describe('Home de la pagina, validamos links', () => {
it('visitar la pág', () => {
cy.visit('https://cypress-playground.vercel.app/forms')
cy.get('[data-testid="bp-name"]').type ("Gisela")
})
})