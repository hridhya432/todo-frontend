import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Display from './components/Display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Add/>}/>
      <Route path='/Display' element={<Display/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
