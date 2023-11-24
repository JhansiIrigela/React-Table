import logo from './logo.svg';
import './App.css';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path={"/pages/1"} element={<Page1 />}/>
          <Route path={"/pages/2"} element={<Page2 />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
