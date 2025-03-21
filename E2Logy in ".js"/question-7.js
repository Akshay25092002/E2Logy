import React, { useState } from 'react';

const Form = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!credentials.username || !credentials.email) {
            setError("Both fields are required!");
            return;
        }

        console.log('Form submitted', credentials);

        setCredentials({ username: "", email: "" });
        setError("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} value={credentials.username} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={credentials.email} />
            <button type="submit">Submit</button>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
        </form>
    );
}

export default Form;
