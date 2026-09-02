import { Routes, Route } from 'react-router'
import Layout from './components/layout'
import Index from './pages/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
}

export default App;