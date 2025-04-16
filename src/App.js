import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Planner from './pages/Planner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Closet from './components/Closet';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import OutfitForm from './components/OutfitForm';
import ViewCloset from './pages/ViewCloset';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/closet' element={<Closet/>}/>
          {/* <Route path="/plan" element={<Planner />} /> */}
        <Route path="/view-closet" element={<ViewCloset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





