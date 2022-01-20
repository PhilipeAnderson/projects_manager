import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Conatact';
import { NewProject } from './pages/NewProject/NewProject';
import { Projects } from './pages/Projects/Projects';
import { Project } from './pages/Projects/Project';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Container } from './Layout/Container';

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
