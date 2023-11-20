import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Teams from './Components/Teams/Teams';
import Players from './Components/Players/Players';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/loggined' Component={Home}></Route>
        <Route path='/' Component={Login}></Route>
        <Route path='/teams' Component={Teams}></Route>
        <Route path='/players' Component={Players}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
