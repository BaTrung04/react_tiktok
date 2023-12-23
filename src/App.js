import { useState } from 'react';
import './App.css';
import Content from './Content';



function App() {
  const [show, setshow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setshow(!show)}>Show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
