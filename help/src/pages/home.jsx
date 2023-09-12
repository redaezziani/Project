// Home Page //
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar } from "../components/modules";

// Testing data //
const Supporters = [
  {
    name: "اسم المساند",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    name: "اسم المساند",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    name: "اسم المساند",
    imgSrc: "https://placehold.co/600x400",
  },
];

const Home = () => {
  //lets make a skelton pluse a for the image and text
  const [loading, setLoading] = useState(true);
  const handelLoding = () => {
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="grid grid-cols-6 md:grid-cols-12 justify-center items-center gap-4">
          {/* Image */}
          <div className="col-span-6">
            {loading ? (
              <div className="animate-pulse rounded-lg w-full h-72 bg-gray-200"></div>
            ) : (
              <img
                onLoad={handelLoding}
                className="rounded-lg w-full h-full"
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/12/291752.jpg"
              />
            )}
          </div>

          {/* Text */}
          <div className="md:col-span-5 col-span-6 flex flex-col justify-center items-start w-full gap-4 text-rtl">
            <div className=" text-3xl">#زلزال الحوز.</div>
            <div className="text">
              وقع الزلزال في جبال الأطلس، وكانت قوته 7.2 درجة على مقياس ريختر .
              وفقًا لتقارير علمية، تقع جبال الأطلس بين صفيحتين تكتونيتين، وهذا
              يؤدي إلى حدوث هزات أرضية . وفي آخر حصيلة للضحايا، قتل أكثر من ألفي
              شخص وأصيب مثلهم تقريبًا . ومباشرة بعد الزلزال، عرفت المناطق
              المجاورة دفعات كبيرة من المساعدات من مختلف المؤسسات والجمعيات
              والأفراد. ولأجل تنضيم هذه العملية وضمان وصول المساعدات لطافة
              المناطق المتضررة. قررنا نحن فريق المطورين إنشاء هذه المنصة الغير
              ربحية التي تهذف إلى جمع البياات حول القرى المتضررة من الزلزال وفرز
              المناطق المنكوبة من المناطق التي وصلتها المساعدات لضمان توزيع عادل
              للمساعدات.
            </div>
            <div className=" bg-emerald text-white rounded-sm px-3  w-40 text-center py-2">
              <Link to="/cities">تعرف على القرى</Link>
            </div>
          </div>

          {/* Title */}
          <div className="col-span-6 md:col-span-12 title text-center py-10">
            المساندون الرسميون
          </div>

          {Supporters.map((supporter, index) => {
            return (
              <div
                key={index}
                className="col-span-6 md:col-span-4 flex flex-col justify-center items-center gap-4 text-rtl"
              >
                <img
                  className="rounded-lg w-[88%] h-[80%]"
                  src={supporter.imgSrc}
                />
                <div className="text">{supporter.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Home };
