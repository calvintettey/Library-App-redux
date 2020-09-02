export let addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}
