import './App.css';
import { NavbarDefault } from './components/Navbar';

function App() {
  const cardData = [
    {
      title: "مراجعة تجربة المستخدم/واجهة المستخدم",
      text: "المكان قريب من شاطئ بارسيلونيتا ومحطة الحافلات على بعد دقيقتين سيرًا على الأقدام وبالقرب من 'نافيجليو' حيث يمكنك الاستمتاع بحياة الليل الرئيسية في برشلونة.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/View_of_Aroumd.jpg/1024px-View_of_Aroumd.jpg",
    },
  ];
  
  return (
    <div className="w-full flex-col relative justify-center items-center flex p-3 overflow-hidden">
      <NavbarDefault />
    </div>
  );
}

export default App;
