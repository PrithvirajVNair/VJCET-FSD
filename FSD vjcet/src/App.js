import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import HW from './components/HW';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Routes>
      <Route path='/' element={<StateBasics/>}/>
      {/* is the landing url */}
      <Route path='/First' element={<First/>}/>
      <Route path='/Table'element={<Table1/>}/>
      <Route path='/Axios'element={<ApiGet/>}/>
    </Routes>
    </div>
  );
}

export default App;
