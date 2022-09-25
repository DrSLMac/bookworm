describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: 'booksData'})
    cy.visit('http://localhost:3000/').wait(2000)
  })
  it('should have a welcome screen', () => {
    cy.contains('Click here to enter the book gallery')
  })
  it('should be able to navigate to the dashboard', () => {
    cy.get('.welcome-button').click()
    .url().should('eq', 'http://localhost:3000/Dashboard')
  })
  it('should have books displayed on dashboard', () => {
   
    cy.get('book_image').should('have.length', 6)
  })
})

{/* <img class="book-image" src="https://storage.googleapis.com/du-prd/books/images/9780735219090.jpg" alt="book cover"> */}