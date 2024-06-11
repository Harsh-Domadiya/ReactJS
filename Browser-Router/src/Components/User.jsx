// https://jsonplaceholder.typicode.com/users
import { useEffect, useState } from 'react'
import './user.css'



function App() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log("Success:", JSON.stringify(json));
                setdata(json);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Users</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
