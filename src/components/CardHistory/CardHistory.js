import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../utils/firebase';
import "firebase/storage";
const CardHistory = ({ title, description, author, idHistory, idAuthor }) => {

    const [bookImageURL, setBookImageURL] = useState(null);

    useEffect(() => {
        firebase.storage().ref(`books/${idHistory}`).getDownloadURL().then(res => {
            setBookImageURL(res);
        }).catch(err => {

        });
    }, [idHistory])


    return (
        <Card
            image={bookImageURL}
            header={title}
            meta={`Autor: ${author}`}
            description={description}
            link
            as={Link}
            to={`/history/${idHistory}/${idAuthor}`}
        >
        </Card>
    );
}

export default CardHistory;