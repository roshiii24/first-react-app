import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionComponent';
import { useState } from 'react';

function App() {

  const company = "xyz"
  const [name, setName] = useState("Roshni");

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={21} company={company} setName={setName} />
    </div>
  );
}

export default App;
