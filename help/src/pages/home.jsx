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
<<<<<<< HEAD
            <div className="section"></div>
=======
            <div className="section ">
                <div className="grid grid-cols-4 rtl-grid px-14 gap-4">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            name={card.name}
                            status={card.status}
                            count={card.count}
                            numberD={card.numberD}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div>
>>>>>>> 66df2d644b4a75a64d101541a28a3237aff00cc0
        </>
    )

}

export default Home