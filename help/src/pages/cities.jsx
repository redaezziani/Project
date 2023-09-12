// Associations Page //

import {
    NavBar,
    CityCard,
    Footer
} from '../components/modules'

// Testing data //
// This data gonna get from api //
const cardData = [
    {
        name: "اسم المدينة او القرية",
        imageUrl: "https://placehold.co/600x400",
        status: true,
        populationCount: 156,
        numberOfContributions: 1,
    },
    {
        name: "اسم المدينة او القرية",
        imageUrl: "https://placehold.co/600x400",
        status: true,
        populationCount: 2000,
        numberOfContributions: 10,
    },
    {
        name: "اسم المدينة او القرية",
        imageUrl: "https://placehold.co/600x400",
        status: false,
        populationCount: 398,
        numberOfContributions: 0,
    },
    {
        name: "اسم المدينة او القرية",
        imageUrl: "https://placehold.co/600x400",
        status: true,
        populationCount: 4000,
        numberOfContributions: 30,
    },
    {
        name: "اسم المدينة او القرية",
        imageUrl: "https://placehold.co/600x400",
        status: false,
        populationCount: 5564,
        numberOfContributions: 10,
    },

]

const Cities = () => {

    return (
        <>

            <NavBar />
            <div className="page">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {cardData.map((card, index) => (
                        <CityCard
                            key={index}
                            name={card.name}
                            imageUrl={card.imageUrl}
                            status={card.status}
                            populationCount={card.populationCount}
                            numberOfContributions={card.numberOfContributions}
                        />
                    ))}

                </div>

            </div>
            <Footer/>

        </>
    )

}

export { Cities }