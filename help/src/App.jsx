import './App.css';
import { NavbarDefault } from './components/Navbar';
import Card from './components/Card'; // Import the Card component without curly braces

function App() {
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
  
  return (
    <div className="w-full flex-col relative justify-center items-center flex p-3 overflow-hidden">
      <NavbarDefault />
      <div className="w-full mt-24 rtl-grid px-11 grid grid-cols-5 gap-4 ">
        {cardData.map((card, index) => (
            <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
