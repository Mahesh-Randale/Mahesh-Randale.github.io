import Blogs from './pages/Blog';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Pages from './pages/Pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="services" element={<Services />} />
            <Route path="cases" element={<Cases />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pages" element={<Pages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;