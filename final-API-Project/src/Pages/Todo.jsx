import { useEffect, useState } from 'react'
// import './eco.css'

function App() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then(item => setdata(item));
  }, [])

  console.log("OK")

  return (
    <>
      <ul>

        {data.map(({ userId, title, completed, }) => {
          return (
            <div style={{ display: "flex" }}>
              <h4>{title} - {userId}</h4>
              <input type="checkbox" checked={completed} />
            </div>
          )
        })}
      </ul>

    </>
  )
}

export default App
