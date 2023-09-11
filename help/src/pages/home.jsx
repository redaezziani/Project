// Home page //

import NavBar from '../components/NavBar'
import Card from '../components/Card';

// Testing data //
const cardData = [
    {
        name: "  الرياض",
        status: "منكوبة",
        count: 12,
        numberD: 1000,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/View_of_Aroumd.jpg/1024px-View_of_Aroumd.jpg",
    },
    {
        name: "  الرياض",
        status: "مساعدة",
        count: 20,
        numberD: 100,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmI2fj0E3rE7yZk-Z10j8sa3I03voi0wp5A&usqp=CAU",
    },
];

const Home = () => {

    return (
        <>
            <NavBar />
            <div className="section">
            </div>
        </>
    )

}

export default Home