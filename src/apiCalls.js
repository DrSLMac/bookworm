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
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj`) //${id}
    .then(response => response.json())
}

const fetchBookCovers = (id) => {
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj`)//interpolate in ID and book covers
    .then(response => response.json())
}


export { fetchBookData, fetchBookDetails, fetchBookCovers }

// https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos