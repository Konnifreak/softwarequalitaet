const PORT = process.env.PORT || 5500;

describe('BMI Calculator', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}`) // ändern Sie URL zu Ihrer App
    })
})
//check if the input fields are rendered
describe('BMI Calculator Field check', function () {
    it('successfully loads', function () {
        cy.get('#weight').should('be.visible')
        cy.get('#height').should('be.visible')
    })
})
//check if range input from height is working
describe('BMI Calculator Range check height', function () {
    it('successfully loads', function () {
        cy.get('#height').invoke('val', 195).trigger('change')
        cy.get('#height').should('have.value', '195')
    })
})
//check if range input from weight is working
describe('BMI Calculator Range check weight', function () {
    it('successfully loads', function () {
        cy.get('#weight').invoke('val', 95).trigger('change')
        cy.get('#weight').should('have.value', '95')
    })
})
//check if when height input is below 100 input is 100
describe('BMI Calculator Height low input or to high', function () {
    it('successfully loads', function () {
        cy.get('#height').invoke('val', 95).trigger('change')
        cy.get('#height').should('have.value', '100')
        cy.get('#height').invoke('val', 255).trigger('change')
        cy.get('#height').should('have.value', '250')
    })
})
//check if when height input is below 100 input is 100
describe('BMI Calculator weigth low input or to high', function () {
    it('successfully loads', function () {
        cy.get('#weight').invoke('val', 25).trigger('change')
        cy.get('#weight').should('have.value', '30')
        cy.get('#weight').invoke('val', 181).trigger('change')
        cy.get('#weight').should('have.value', '180')
    })
})

//check if bmi is a number with 2 decimals with input from height 186 and weight 95
describe('BMI Calculator Calculation check', function () {
    it('successfully loads', function () {
        cy.get('#weight').invoke('val', 95).trigger('change')
        cy.get('#height').invoke('val', 186).trigger('change')
        cy.get('#bmi').should('contain', '27.46')
    })
})
