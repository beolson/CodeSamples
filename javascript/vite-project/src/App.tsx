import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul>
        <li>
          <Link to="/Flow">Flow</Link>
        </li>

        <li>
          <Link to="/Drag">Drag</Link>
        </li>
        <li>
          <Link to="/Edit">Edit</Link>
        </li>
        <li>
          <Link to="/EditTwo">EditTwo</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
