let initialState = {
    books : [
        {title: "Pepperwood Chronicles", author: "Nick Miller", genre: "Action", publisher: "NG Books"},
        {title: "Eragon", author: "Christopher Paolini", genre: "Fantasy", publisher: "Scholastic Publishers"},
        {title: "Throne of Fire", author: "Rick Riordan", genre: "Mythology", publisher: "Penguin Books"},
        {title: "Design of Everyday Things", author: "Don Norman", genre: "Non-Fiction", publisher: "MacMillan Books"},
      ]
}

let libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            let newBook = {
                title: action.payload.title,
                author: action.payload.author,
                genre: action.payload.genre,
                publisher: action.payload.publisher
            };
            return{...state, books:[...state.books, newBook]};
            
            
            break;
    
        default:
            return state;
    }
};


export default libraryReducer;