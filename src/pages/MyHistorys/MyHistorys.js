import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardHistory from '../../components/CardHistory/CardHistory';
import { Card } from 'semantic-ui-react';
const MyHistory = ({ user, userId }) => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const restAPI = async () =>
            await axios({
                method: 'GET',
                url: 'http://localhost:4000/api/book',
                params: {
                    userId: user.uid,
                }
            }).then(res => setBooks(res.data));
        restAPI()
    }, [user])

    return (
        <Card.Group itemsPerRow={3} stackable={true} doubling={true}>
            {books.map(book => (
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

export default MyHistory;