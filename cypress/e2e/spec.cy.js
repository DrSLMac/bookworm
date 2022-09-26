describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: 'booksData'})
    cy.visit('http://localhost:3000').wait(2000)
  })
  it('should have a welcome screen', () => {
    cy.contains('Click here to enter the book gallery')
  })
  it('should be able to navigate to the dashboard', () => {
    cy.get('.welcome-button').click()
    .url().should('eq', 'http://localhost:3000/Dashboard')
  })
  it('should have books displayed on dashboard', () => {
    cy.get('.book-card').should('have.length', 7)
  })
  it('should be able to see book details when hovering over book', () => {
    cy.get('.book-card').first().should('contain.text', 'WHERE THE CRAWDADS SING')
      .get('.book-card').last().should('contain.text', 'FAIRY TALE')
      .get('.book-card').first().should('contain.text', 'In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.')
      .get('.book-card').last().should('contain.text', 'A high school kid inherits a shed that is a portal to another world where good and evil are at war.')
  })
  it('should have a navigation bar present on the dashboard', () => {
    cy.get('nav').should('be.visible')
  })
  it('should be able to view genre filter options', () => {
    cy.get('Form').should('be.visible')
  })
  it('should be able to filter by genre', () => {
    cy.get('form').should('contain.text', "Hardcover Fiction")
      .get('.book-card').should('contain.text', 'FAIRY TALE')
  })
  it('should be able to save a book', () => {
    cy.get('.book-card').last().should('contain.text', 'FAIRY TALE')
    cy.contains('Save').click()
  })
  it('should be able to view the saved books in the saved books section', () => {
    cy.get('.book-card').last().should('contain.text', 'FAIRY TALE')
      .contains('Save').click()
      .contains('Saved Books Section').click()
      .url().should('eq', 'http://localhost:3000/SavedBooksSection')
      .get('.book-card').should('contain.text', 'FAIRY TALE')
  })
  it('should be able to see an error for a bad network request', () => {
    cy.visit('http://localhost:3000/Savy')
      .get('.error-message').should('contain.text', 'What do you call 2000 mockingbirds?')
  })
})

{/* <img class="book-image" src="https://storage.googleapis.com/du-prd/books/images/9780735219090.jpg" alt="book cover"> */}