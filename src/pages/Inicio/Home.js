import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Grid } from 'semantic-ui-react';
import CardHistory from '../../components/CardHistory/CardHistory';
import "./Home.scss"
const Home = () => {

    const [books, setBooks] = useState([]);

    console.log(books)

    useEffect(() => {
        const res = axios({
            method: 'GET',
            url: 'http://localhost:4000/api/books'
        }).then(res => {
            setBooks(res.data)
        });
    }, [])

    return (
        <Card.Group itemsPerRow={3} stackable={true} doubling={true}>
            {books.map((book, index) => (
                <CardHistory
                    title={book.title}
                    description={book.description}
                    author={book.anon ? "Anonimo" : book.author}
                    idHistory={book._id}
                    idAuthor={book.idAuthor}
                />
            ))}
        </Card.Group>
    );
}

export default Home;