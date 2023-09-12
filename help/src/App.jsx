// App page //

import {
  Route,
  Routes
} from 'react-router-dom'

import {
  Home,
  NotFound,
  Cities,
  Associations,
  Communication,
  Form
} from './pages/modules'

function App() {

  return (
    <div className="app w-full">
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/associations" element={<Associations/>}/>
      <Route path="/communication" element={<Communication/>}/>
      <Route path="/addVile" element={<Form/>}/>
      <Route path="*" element={<NotFound/>}/></Routes>

    </div>
  );
  
}

export default App;
