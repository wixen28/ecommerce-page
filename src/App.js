

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Lightbox from './components/Lightbox'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Main />
    {/* <Lightbox /> */}
    {/* <Routes>
      <Route path='/main' element={ <Main />}/>
    </Routes> */}
  </BrowserRouter>
}

export default App