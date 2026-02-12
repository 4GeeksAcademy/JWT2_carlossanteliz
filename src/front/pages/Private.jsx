import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const [users, setUsers] = useState([]);
    const [loggedInAs, setLoggedInAs] = useState(null);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {

        if (!token) {
            alert("You are not authorized to access this page.");
            navigate("/");
            return;
        }

        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        fetch(`${backendUrl}/api/protected`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("Unauthorized");
                }
                return resp.json();
            })
            .then(data => {
                setLoggedInAs(data.logged_in_as);
                setUsers(data.users || []);
            })
            .catch(err => {
                alert("You are not authorized to access this page.");
                navigate("/");
            });
    }, [token, navigate]);

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
