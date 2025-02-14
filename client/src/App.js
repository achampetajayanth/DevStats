import Home from './Components/Home';
import MainPage from './Components/MainPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Dashboard' element={<MainPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
