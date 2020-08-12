import React, { Component } from 'react';
import Book from './Book';

let Library = (props) => {
    return (
        <div>
            {props.bookInfo.map((book, index) => {
                return <Book title={book.title} author={book.author} genre={book.genre} publisher={book.publisher} key={index} />
            })}
        </div>
    )
}

export default Library;