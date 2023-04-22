import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/HomeSection';
import Sobremim from './components/pages/Sobremim';

function App() {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<Sobremim/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
