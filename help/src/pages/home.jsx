// Home page //

import NavBar from '../components/NavBar'

const Home = () => {

    return (
        <>
            <NavBar />
            <div className="section">

                <div className="grid grid-cols-6 md:grid-cols-12 gap-y-4 md:gap-4 justify-center items-center">

                    {/* Image */}
                    <div className="col-span-6 w-full h-full flex justify-center items-center">
                        <img className='w-full h-full rounded-lg' src='hero.jpg' />
                    </div>

                    {/* Text */}
                    <div className="col-span-6 w-full h-full flex flex-col justify-center rtl-grid">
                        <div className="title">
                            #زلزال الحوز.
                        </div>
                        <div className="text">
                            وقع الزلزال في جبال الأطلس، وكانت قوته 7.2 درجة على مقياس ريختر . وفقًا لتقارير علمية، تقع جبال الأطلس بين صفيحتين تكتونيتين، وهذا يؤدي إلى حدوث هزات أرضية . وفي آخر حصيلة للضحايا، قتل أكثر من ألفي شخص وأصيب مثلهم تقريبًا .  ومباشرة بعد الزلزال، عرفت المناطق المجاورة دفعات كبيرة من المساعدات من مختلف المؤسسات والجمعيات والأفراد. ولأجل تنضيم هذه العملية وضمان وصول المساعدات لطافة المناطق المتضررة. قررنا نحن فريق المطورين إنشاء هذه المنصة الغير ربحية التي تهذف إلى جمع البياات حول القرى المتضررة من الزلزال وفرز المناطق المنكوبة من المناطق التي وصلتها المساعدات لضمان توزيع عادل للمساعدات.
                        </div>
                    </div>

                    {/* Button */}
                    <div className="col-span-6 btn-dark text-center">
                        تعرف على القرى
                    </div>

                </div>

            </div>
        </>
    )

}

export default Home