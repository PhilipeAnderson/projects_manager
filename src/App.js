import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from 'react-modal';

import { Home } from './pages/Home/Home';

import { NewProject } from './pages/NewProject/NewProject';
import { Projects } from './pages/Projects/Projects';
import { Project } from './pages/Projects/Project';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { GlobalStyle } from './global.js';
import { Container } from './Layout/Container';

Modal.setAppElement('#root');

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
        </Routes>
      </Container>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
