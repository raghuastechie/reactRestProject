import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [data, setData] = useState('raghunadh');
    useEffect(() => {
        axios.get('http://localhost:3001/gMys')
        .then((response) => {
            setData(response);
            console.log(`Data >> >> ${response}`, response);
        })
        .catch((e) => setData(e));
    }, [data]);

    return(
        <>
            <h2>Yes Its FrontReact...</h2>
            <h1>{data}</h1>
        </>
    )
}

export default UserForm;