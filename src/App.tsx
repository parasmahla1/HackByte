import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import IndexFront from './pages/IndexFront'
import Call from './pages/Call'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<IndexFront />} />
        <Route path="/call" element={<Call />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <IndexFront /> */}
           
    </div>
  )
}

export default App