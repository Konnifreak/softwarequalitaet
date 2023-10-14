const PORT = process.env.PORT || 5500;

beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`) // ändern Sie URL zu Ihrer App
})