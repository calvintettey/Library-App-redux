import React, { Component } from 'react';

class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author:"",
            genre: "",
            publisher:"",
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state)
        this.setState({title:"", author: "", genre:"", publisher:""})
        console.log("submitted");
    }

    render() {
        return (
            <>
                 <form onSubmit={this.handleSubmit}>
                     <div>
                         <label htmlFor="title">Title</label>
                         <input type="text" name="title" onChange={this.handleChange} />               
                    </div>
                    <div>
                         <label htmlFor="author">Author</label>
                         <input type="text" name="author" onChange={this.handleChange} />               
                    </div>
                    <div>
                         <label htmlFor="genre">Genre</label>
                         <input type="text" name="genre" onChange={this.handleChange} />               
                    </div>
                    <div>
                         <label htmlFor="publisher">Publisher</label>
                         <input type="text" name="publisher" onChange={this.handleChange} />               
                    </div>
                    <button type="submit">Submit</button>
                 </form>
            </>
        );
    }
}

export default AddBookForm;