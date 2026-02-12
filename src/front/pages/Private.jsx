import React, { useEffect, useState } from "react";

const Private = () => {
    const [users, setUsers] = useState([]);
    const [loggedInAs, setLoggedInAs] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        fetch(`${backendUrl}/api/protected`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setLoggedInAs(data.logged_in_as);
                setUsers(data.users || []);
            })
            .catch(err => console.log("Error:", err));
    }, []);

    return (
        <div className="container mt-5">
            <h1>Private Page</h1>
            {loggedInAs && <p>Logged in as: {loggedInAs}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.email} - {user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Private;
