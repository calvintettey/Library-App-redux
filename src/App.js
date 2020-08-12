import React, { Component, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBookForm from './components/AddBookForm';
import Library from './components/Library';
import Book from './components/Book';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books : [
        {title: "Pepperwood Chronicles", author: "Nick Miller", genre: "Action", publisher: "NG Books"},
        {title: "Eragon", author: "Christopher Paolini", genre: "Fantasy", publisher: "Scholastic Publishers"},
        {title: "Throne of Fire", author: "Rick Riordan", genre: "Mythology", publisher: "Penguin Books"},
        {title: "Design of Everyday Things", author: "Don Norman", genre: "Non-Fiction", publisher: "MacMillan Books"},
      ]
    }
  }
  
  addNewBook = (book) => {
    this.setState({books: [book, ...this.state.books]})
  }

  render(){
    return (
      <div className="App">
        <AddBookForm addBook ={this.addNewBook} />
        <Library bookInfo={this.state.books} />
      </div>
    );
  }
}

export default App;
