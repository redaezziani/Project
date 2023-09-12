// Home Page //

import { Link } from 'react-router-dom'
import {
    Footer,
    NavBar
} from '../components/modules'

// Testing data //
const Supporters = [
    {
        name: 'اسم المساند',
        imgSrc: 'https://placehold.co/600x400'
    },
    {
        name: 'اسم المساند',
        imgSrc: 'https://placehold.co/600x400'
    },
    {
        name: 'اسم المساند',
        imgSrc: 'https://placehold.co/600x400'
    }
]

const Home = () => {

    return (
        <>
            <NavBar />
            <div className="page">

                <div className="grid grid-cols-6 md:grid-cols-12 justify-center items-center gap-4">

                    {/* Image */}
                    <div className="col-span-6">
                        <img className='rounded-lg w-full h-full' src='hero.jpg' />
                    </div>

                    {/* Text */}
                    <div className="col-span-6 flex flex-col justify-center gap-4 text-rtl">
                        <div className="title">#زلزال الحوز.</div>
                        <div className="text">
                            وقع الزلزال في جبال الأطلس، وكانت قوته 7.2 درجة على مقياس ريختر . وفقًا لتقارير علمية، تقع جبال الأطلس بين صفيحتين تكتونيتين، وهذا يؤدي إلى حدوث هزات أرضية . وفي آخر حصيلة للضحايا، قتل أكثر من ألفي شخص وأصيب مثلهم تقريبًا .  ومباشرة بعد الزلزال، عرفت المناطق المجاورة دفعات كبيرة من المساعدات من مختلف المؤسسات والجمعيات والأفراد. ولأجل تنضيم هذه العملية وضمان وصول المساعدات لطافة المناطق المتضررة. قررنا نحن فريق المطورين إنشاء هذه المنصة الغير ربحية التي تهذف إلى جمع البياات حول القرى المتضررة من الزلزال وفرز المناطق المنكوبة من المناطق التي وصلتها المساعدات لضمان توزيع عادل للمساعدات.
                        </div>
                        <div className="btn-dark">
                            <Link to="/cities">تعرف على القرى</Link>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="col-span-6 md:col-span-12 title text-center py-10">
                        المساندون الرسميون
                    </div>

                    {
                        Supporters.map((supporter, index) => {

                            return (
                                <div
                                    className="col-span-6 lg:col-span-4 flex flex-col gap-2
                                    bg-app--light border border-app--dark shadow-md rounded-lg p-2"
                                    key={index}
                                >
                                    <img className="object-cover rounded-lg" src={supporter.imgSrc} />
                                    <div className="title text-center">{supporter.name}</div>
                                </div>
                            )

                        })
                    }

                </div>

            </div>
            <Footer/>
        </>
    )

}

export { Home }