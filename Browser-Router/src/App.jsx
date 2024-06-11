import Home from './Components/Home';
import ECommerce from './Components/ECommerce';
import Comments from './Components/Comments';
import User from './Components/User';
import Post from './Components/Post';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  console.log(ECommerce)

  return (
    <BrowserRouter>
      <ul className='nav'>
        <Link to="/home"><button> Home </button></Link>
        <Link to="/product"><button> Todo's List </button></Link>
        <Link to="/post"><button> Post's Feed </button></Link>
        <Link to="/Comments"><button> Comments </button></Link>
        <Link to="/User"><button> User</button></Link>
      </ul>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<ECommerce />} />
        <Route path='/Comments' element={<Comments />} />
        <Route path='/User' element={<User />} />
        <Route path='/Post' element={<Post />} />
      </Routes>

      <footer>
        2024 &copy; ReactJS Projects
      </footer>
    </BrowserRouter>

  );

}
export default App;