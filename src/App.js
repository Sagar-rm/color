import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import { Link, Route , Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Aap from './pages/aap'
import Name from './pages/namechages'
import Color from './pages/color';

function App() {
  return (
    <div className="App">
    {/* <h1>React Router dom exmpale</h1>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
<Link to="/contact">Contact</Link>
  </li>
</ul>


<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>

</Routes> */}
<Aap/>
<Name/>
<Color/>
    </div>
  );
}

export default App;
