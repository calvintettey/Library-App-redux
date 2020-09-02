import React, { Component, useReducer } from 'react';
import { connect } from "react-redux";
import { addBook } from "./store/libraryActions";
import logo from './logo.svg';
import './App.css';
import AddBookForm from './components/AddBookForm';
import Library from './components/Library';
import Book from './components/Book';
import { render } from '@testing-library/react';

class App extends Component {
  
  
  addNewBook = (book) => {
   this.props.addBook(book)
  }

  render(){
    return (
      <div className="App">
        <AddBookForm addBook ={this.addNewBook} />
        <Library bookInfo={this.props.books} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  books: state.books
});

let mapDispatchToProps = {
  addBook: addBook
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
