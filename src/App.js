import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import ComponentC from './ComponentC';

const fname = createContext()
const lname = createContext()
function App() {
  const [name, setName]=useState('vikas')
  return (
    <div className="App">
      <fname.Provider value={name}>
        <lname.Provider value={'khan'}>
          <ComponentC />
        </lname.Provider>
      </fname.Provider>
    </div>
  );
}

export default App;
export { fname, lname } 
