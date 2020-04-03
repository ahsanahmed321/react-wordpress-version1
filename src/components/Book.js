import React, { Component } from "react";
import axios from "axios";

export default class Book extends Component {
  state = {
    books: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1/wordpress/wp-json/wp/v2/books")
      .then(res => this.setState({ books: res.data, isLoaded: true }))
      .catch(err => console.log(err));
  }

  render() {
    var abc;
    if (this.state.isLoaded === true) {
      abc = this.state.books.map(book => {
        return (
          <div>
            <h1>{book.title.rendered}</h1>
            <p>{book.content.rendered}</p>
            <p>{book.acf.publisher}</p>
          </div>
        );
      });
    }

    console.log(this.state.books);
    return <div>{abc}</div>;
  }
}
