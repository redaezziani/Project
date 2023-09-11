import { Route , Routes  } from 'react-router-dom'
import Card from './components/Card'


import Home from './pages/home'
import NotFound from './pages/notFound'

import Cities from './sections/cities'
import Associations from './sections/associations'
import Communication from './sections/communication'


// testing data //
const cardData = [
  {
    name: "  الرياض",
    status: "منكوبة",
    count: 12,
    numberD:1000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/View_of_Aroumd.jpg/1024px-View_of_Aroumd.jpg",
  },
  {
    name: "  الرياض",
    status: "مساعدة",
    count: 20,
    numberD:100,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmI2fj0E3rE7yZk-Z10j8sa3I03voi0wp5A&usqp=CAU",
  },
];

function App() {

  return (
    <div className="w-full flex-col relative justify-center items-center flex p-3 overflow-hidden">
      
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
