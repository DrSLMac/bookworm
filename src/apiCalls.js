const fetchBookData = () => {
    return fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj')
        .then((response) => {
            if(!response.ok) {
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        })
}

const fetchBookDetails = (id) => {
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj`)
    .then(response => response.json())
}

const fetchBookCovers = (id) => {
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj`)
    .then(response => response.json())
}


export { fetchBookData, fetchBookDetails, fetchBookCovers }