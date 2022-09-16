import './singleUser.css';
import { useState, useEffect } from 'react';

/* Hook for id */
import { useParams } from "react-router-dom";

function SingleUser() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const BASE_URL = "http://localhost:8080";

    useEffect(() => {
        fetch(`${BASE_URL}/user/${userId}`)
            .then(result => {
                return result.json()
            })
            .then(data => {
                setUser(data);
                console.log(data[0].email)
            })
    }, [userId])



    return (
        <div key={userId}>
            {user && (
                <div className='list'>
                    <h1 className='last-name'>Name - {user[0].name}</h1>
                    <p className='user-email'>Email - {user[0].email}</p>
                    <p className='user-id'>ID - {user[0].id}</p>
                </div>
            )}
        </div>

    )
}

export default SingleUser;