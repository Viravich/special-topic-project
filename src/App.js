import logo from './logo.svg';
import './App.css';
import 'boxicons/css/boxicons.miin.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<AppLayout/>}>
          <Route path='/' element ={<Home/>} />
          <Route path='/settime' element ={<Settime/>} />
          <Route path='/temperatue' element ={<Temperature/>} />
          <Route path='/humidity' element ={<Humidity/>} />
          <Route path='/soihumidity' element ={<Soilhumidity/>} />
          <Route path='/graph' element ={<Graph/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
