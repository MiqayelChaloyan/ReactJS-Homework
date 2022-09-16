import { useEffect, useState } from 'react';
import './users.css'

/* Router */
import { Link } from "react-router-dom";


function Users() {
    const [users, setUsers] = useState([]);

    const BASE_URL = "http://localhost:8080";


    useEffect(() => {
        fetch(`${BASE_URL}/users?page=${1}&limit=${19}`)
            .then(result => {
                return result.json()
            })
            .then(data => {
                setUsers(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='users-list'>

            {users.map(user =>
                <Link key={user.id} to={`/user/${user.id}`}>
                    <li className='user'>Name - {user.name}</li>
                </Link>
            )}

        </div>
    )
}

export default Users;
