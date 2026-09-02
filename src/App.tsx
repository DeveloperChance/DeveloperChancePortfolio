import { Routes, Route } from 'react-router'
import Layout from './components/layout'
import Index from './pages/index'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import NotFound from './pages/notfound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;