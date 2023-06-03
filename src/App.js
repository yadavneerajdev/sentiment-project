import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import './App.css';
import NavSideBar from './components/NavSideBar';
import Results_summary from './components/Results_summary';
import Hero from "./components/Hero";
import Dashboard from './components/Dashboard';
import UserSection from "./components/UserSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavSideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/user' element={<UserSection />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/results' element={<Results_summary />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;



// Pages we need...

/*
1. Main Hero UI page
2. User Input Section page
3. Dashboard of the results fetched
4. Representation of the user input with classifications (With Pagination...)
*/


// Installed react-router-dom for navigation
