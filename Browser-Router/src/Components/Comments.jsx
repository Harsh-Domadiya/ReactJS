import { useEffect, useState } from 'react'
import './comments.css'

function App() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => setdata([...data]))
    }, []);

    return (
        <div className="container">
            <ul>
                <h2>Comments for Post ID</h2>
                {data.map((item) => (
                    <li key={item.id}>
                        <span>
                            {item.body}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App;
