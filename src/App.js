import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [inputs, setInputs] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"", 
    confPassword:"",
    hasBeenSubmitted: false
  });
  return (
    <div className="App">
      <UserForm inputs={inputs} setInputs={setInputs}/>
    </div>
  );
}

export default App;