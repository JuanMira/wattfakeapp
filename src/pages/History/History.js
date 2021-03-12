import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const History = ({ match }) => {

    const [history, setHistory] = useState({})

    console.log(history)

    useEffect(() => {
        const resAPI = async () => {
            await axios.get(`http://localhost:4000/api/books/${match.params.id}`).then(res => {
                setHistory(res.data)
            });

        }
        resAPI()

    }, [match])

    return (
        <div>
            <h1>{history.anon ? "Anonimo" : `${history.author}`}</h1>
            <h1>{history.history}</h1>
        </div>
    );
}

export default withRouter(History);