import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionComponent';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const company = "xyz"
  const [name, setName] = useState("Roshni");

  return (
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route path='/functional-component' element={<FunctionalComponent name={name} age={21} company={company} setName={setName} />} />
    </Routes>
  );
}

export default App;
