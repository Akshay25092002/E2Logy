import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error - Status: ${response.status}`)
                }
                return response.json();
            }).then(data => {
                setUsers(data);
                setLoading(false);
            }).catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading Users...</p>}
            {error && <p style={{ color: 'red' }}>Error Message: {error}</p>}
            {/* Users data should be displayed here */}
            {!loading && !error && (
                <ul>
                    {users.map(user => (<li key={user.id}>
                        <h2>{user.name} - ({user.username})</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

                        <h3>Address:</h3>
                        <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                        <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>

                        <h3>Company:</h3>
                        <p><strong>Name:</strong> {user.company.name}</p>
                        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                        <p><strong>bs:</strong> {user.company.bs}</p>
                    </li>))}
                </ul>
            )}
        </div>
    );
}

export default UserList;
