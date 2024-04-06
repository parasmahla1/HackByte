import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import IndexFront from './pages/IndexFront'
import Call from './pages/Call'

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<IndexFront />} />
        <Route path="/call" element={<Call />} />
        <Route path="/about" element={<Call />} />
        <Route path="/call" element={<Call />} />
        <Route path="/call" element={<Call />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <IndexFront /> */}
           
    </>
  )
}

export default App