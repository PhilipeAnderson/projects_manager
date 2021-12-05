import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Conatact';
import { Company } from './pages/Company/Company';
import { NewProject } from './pages/NewProject/NewProject';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/newproject">New Project</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
