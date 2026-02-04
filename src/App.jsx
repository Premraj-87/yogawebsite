
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Poses from './pages/Poses'
import PoseDetails from './pages/PoseDetails'
import Routines from './pages/Routines'
import RoutineDetails from './pages/RoutineDetails'
import Meditation from './pages/Meditation'
import Benefits from './pages/Benefits'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <main className='min-h-screen bg-green-50 px-4 py-18'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/poses' element={<Poses/>}/>
      <Route path='/poses/:id' element={<PoseDetails/>}/>
      <Route path='/routines' element={<Routines/>}/>
      <Route path="/routines/:id" element={<RoutineDetails />} />

      <Route path='/meditation' element={<Meditation/>}/>
      <Route path='/benefits' element={<Benefits/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </main>
  )
}

export default App