import { useEffect, useState } from 'react'
import './Post.css';


function App() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setdata(data))
    }, []);


    return (
        <>
            <ul className='post-list'>
                <h1>Post's Feed</h1>
                {data.map((item) =>
                    <li key={item.id}>
                        <li>
                            {item.title}
                        </li>
                            {item.body}
                    </li>
                )}
            </ul>
        </>
    );
}

export default App;

