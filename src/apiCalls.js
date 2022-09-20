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

export { fetchBookData }