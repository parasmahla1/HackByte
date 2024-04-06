import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import IndexFront from './pages/IndexFront'
import Call from './pages/Call'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<IndexFront />} />
        <Route path="/call" element={<Call />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <IndexFront /> */}
           
    </>
  )
}

export default App