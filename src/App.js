import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Myaccount from './Components/Myaccount';
import Mytestpage from './Components/Mytestpage';
function App() {
  return (
    <div className="App">
      <Myaccount />
      <Mytestpage />
    </div>
  );
}
export default App;