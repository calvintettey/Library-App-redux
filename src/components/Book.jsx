import React, { Component } from 'react';

let Book = (props) => {
    return (
        <div>
            <h3>Title: {props.title} </h3>
            <h4>Author: {props.author} </h4>
            <p>Genre: {props.genre} </p>
            <p>Publisher: {props.publisher} </p>
            <hr />
        </div>
    );
}

export default Book;