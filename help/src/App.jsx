// Main page //

import { Route , Routes  } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Cities from './sections/cities'
import Associations from './sections/associations'
import Communication from './sections/communication'

function App() {

  return (
    <div className="w-full relative flex flex-col justify-center items-center overflow-hidden">
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/associations" element={<Associations/>}/>
      <Route path="/communication" element={<Communication/>}/>
      <Route path="*" element={<NotFound/>}/></Routes>

    </div>
  );
  
}

export default App;
