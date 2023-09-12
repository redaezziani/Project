import { useState } from "react";
import {
  Button,
  Input,
  Radio,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { RiImageAddFill } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Form = () => {
  const [population, setPopulation] = useState("");
  const [name, setName] = useState("");
  const [injured, setInjured] = useState("");
  const [deceased, setDeceased] = useState("");
  const [images, setImages] = useState([]);
  const [police, setPolice] = useState("yes");
  const [aid, setAid] = useState("yes");
  const [fire, setFire] = useState("yes");
  const [roads, setRoads] = useState("good");
  const [internet, setInternet] = useState("good");
  const [water, setWater] = useState("good");
  const [electricity, setElectricity] = useState("good");
  const [model, setModel] = useState(false);
  const [response, setResponse] = useState("error"); // 'error' , 'default
  const handelModel = () => {
    setModel(!model);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePopulationChange = (e) => {
    setPopulation(e.target.value);
  };

  const handleInjuredChange = (e) => {
    setInjured(e.target.value);
  };

  const handleDeceasedChange = (e) => {
    setDeceased(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      population,
      injured,
      deceased,
      police,
      aid,
      fire,
      roads,
      internet,
      water,
      electricity,
    };

    try {
      const response = await fetch("/api/saveFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, images }),
      });

      if (response.ok) {
        setResponse("success");
        handelModel();
        console.log("Success:", response);
      } else {
        setResponse("error");
        console.log("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="w-full  relative rtl-container h-full flex flex-col justify-start items-start p-2 gap-4 min-h-screen">
        <Card
          className={`mt-6 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rtl-container
          ${model ? "block" : "hidden"} w-96`}
        >
          <CardBody>
            {response === "success" ? (
              <>
                <Typography variant="h5" className="mb-2 font-Cairo">
                  شكرًا لإضافة القرية
                </Typography>
                <Typography className="font-Cairo text-emerald/75">
                  تمت إضافة القرية بنجاح. نحن نقدر مساهمتك.
                </Typography>
              </>
            ) : response === "error" ? (
              <>
                <Typography variant="h5" className="mb-2 font-Cairo ">
                  خطأ في الإضافة
                </Typography>
                <Typography className="font-Cairo  text-red-600/70">
                  للأسف، حدث خطأ أثناء محاولة إضافة القرية. يرجى المحاولة مرة
                  أخرى.
                </Typography>
              </>
            ) : (
              // Display some default or empty content when model is false
              <>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  نص افتراضي
                </Typography>
                <Typography>هذا نص افتراضي باللغة العربية.</Typography>
              </>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="font-Cairo" onClick={handelModel}>
              إغلاق
            </Button>
          </CardFooter>
        </Card>

        <Link
          to="/"
          className="absolute top-0 left-0 mt-4 ml-4 flex items-center hover:text-emerald transition-colors"
        >
          <FiArrowLeft className="text-4xl text-slate/40" />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="w-full text-center mt-4 ">
            <p className=" text-slate text-4xl font-semibold ">
              إضافة دوار جديد
            </p>
          </div>
          <div className="flex w-full gap-4 mt-20 flex-col items-start justify-start ">
            <div className="w-full text-start">
              <p className="text-emerald text-xl font-semibold">
                معلومات السكان :
              </p>
            </div>
            <div className="w-full justify-between flex flex-col gap-20 md:flex-row ">
              <div className="rtl-container  w-80 flex justify-center items-start flex-col gap-5">
                <Input
                  color="teal"
                  className="rtl-container"
                  label="اسم الدوار :"
                  value={name}
                  onChange={handleNameChange}
                />
                <Input
                  color="teal"
                  className="rtl-container"
                  label="عدد السكان :"
                  value={population}
                  onChange={handlePopulationChange}
                />
                <Input
                  color="teal"
                  className="rtl-container"
                  label="عدد الضحايا المصابين :"
                  value={injured}
                  onChange={handleInjuredChange}
                />
                <Input
                  color="teal"
                  className="rtl-container"
                  label="عدد الموتى :"
                  value={deceased}
                  onChange={handleDeceasedChange}
                />
              </div>
              <div className="rtl-container flex flex-col items-start gap-4 justify-between">
                <div className="flex justify-between gap-14">
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <p className="text-emerald text-xl font-semibold">
                      اضف صورا للقرية .{" "}
                    </p>
                    <p className="text-muted">
                      لمساعدة الناس الاخرين للتعرف على المنطقة.
                    </p>
                  </div>
                  <div className="flex w-52 bg-mutedLight rounded-md relative h-52 justify-center items-center">
                    <Input
                      type="file"
                      color="teal"
                      id="fileInput"
                      className="rtl-container absolute inset-0 hidden"
                      multiple
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="fileInput"
                      className="w-full absolute flex justify-center items-center left-0 top-0 h-full  cursor-pointer"
                    >
                      <RiImageAddFill className="text-4xl text-slate/40" />
                    </label>
                  </div>
                </div>
                <div className="w-full grid md:grid-cols-4 grid-cols-3 lg:grid-cols-5 gap-2">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="w-20 md:w-[80%] col-span-1 h-20 rounded-sm aspect-square bg-mutedLight"
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 mt-10 ">
              <div className="w-full text-start">
                <p className=" text-emerald text-xl font-semibold">
                  وصول الإغاثة:
                </p>
              </div>
              <div className="w-full justify-center flex-col items-center gap-2">
                <div className="group  flex justify-start items-center ">
                  <p>الدرك الملكي :</p>
                  <div className="radio-group  flex justify-start items-center  gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="police"
                        label="نعم"
                        value="yes"
                        checked={police === "yes"}
                        onChange={() => setPolice("yes")}
                      />
                      <Radio
                        name="police"
                        label="لا"
                        value="no"
                        checked={police === "no"}
                        onChange={() => setPolice("no")}
                      />
                    </div>
                  </div>
                </div>
                <div className="group  flex justify-start items-center ">
                  <p> القوات لمساعدة : </p>
                  <div className="radio-group ml-20 flex justify-center items-center gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="aid"
                        label="نعم"
                        value="yes"
                        checked={aid === "yes"}
                        onChange={() => setAid("yes")}
                      />
                      <Radio
                        name="aid"
                        label="لا"
                        value="no"
                        checked={aid === "no"}
                        onChange={() => setAid("no")}
                      />
                    </div>
                  </div>
                </div>
                <div className="group  flex justify-start items-center ">
                  <p>الوقاية المدنية : </p>
                  <div className="radio-group ml-20 flex justify-center items-center gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="fire"
                        label="نعم"
                        value="yes"
                        checked={fire === "yes"}
                        onChange={() => setFire("yes")}
                      />
                      <Radio
                        name="fire"
                        label="لا"
                        value="no"
                        checked={fire === "no"}
                        onChange={() => setFire("no")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 mt-10 ">
              <div className="w-full text-start">
                <p className="text-emerald text-xl font-semibold">
                  {" "}
                  البنية التحتية :{" "}
                </p>
              </div>
              <div className="w-full justify-center flex-col items-center gap-2">
                <div className="group  flex justify-start items-center ">
                  <p>حالة الطرق : </p>
                  <div className="radio-group flex justify-center items-center gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="roads"
                        value="good"
                        label="جيدة"
                        checked={roads === "good"}
                        onChange={() => setRoads("good")}
                      />
                      <Radio
                        name="roads"
                        value="bad"
                        label="رديئة"
                        checked={roads === "bad"}
                        onChange={() => setRoads("bad")}
                      />
                      <Radio
                        name="roads"
                        value="none"
                        label="منعدمة"
                        checked={roads === "none"}
                        onChange={() => setRoads("none")}
                      />
                    </div>
                  </div>
                </div>
                <div className="group  flex justify-start items-center ">
                  <p>حالة شبكة الإنترنت : </p>
                  <div className="radio-group ml-20 flex felx-col md:flex-row justify-center items-center gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="internet"
                        value="good"
                        label="جيدة"
                        checked={internet === "good"}
                        onChange={() => setInternet("good")}
                      />
                      <Radio
                        name="internet"
                        value="bad"
                        label="رديئة"
                        checked={internet === "bad"}
                        onChange={() => setInternet("bad")}
                      />
                      <Radio
                        name="internet"
                        value="none"
                        label="منعدمة"
                        checked={internet === "none"}
                        onChange={() => setInternet("none")}
                      />
                    </div>
                  </div>
                </div>
                <div className="group  flex justify-start items-center ">
                  <p>حالة شبكة المياه : </p>
                  <div className="radio-group ml-20 flex justify-center items-center gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="water"
                        value="good"
                        label="جيدة"
                        checked={water === "good"}
                        onChange={() => setWater("good")}
                      />
                      <Radio
                        name="water"
                        value="bad"
                        label="رديئة"
                        checked={water === "bad"}
                        onChange={() => setWater("bad")}
                      />
                      <Radio
                        name="water"
                        value="none"
                        label="منعدمة"
                        checked={water === "none"}
                        onChange={() => setWater("none")}
                      />
                    </div>
                  </div>
                </div>
                <div className="group  flex justify-start items-center ">
                  <p>حالة شبكة الكهرباء : </p>
                  <div className="radio-group ml-20 flex justify-center items-center gap-2">
                    <div className="flex md:gap-10 ">
                      <Radio
                        name="electricity"
                        value="good"
                        label="جيدة"
                        checked={electricity === "good"}
                        onChange={() => setElectricity("good")}
                      />
                      <Radio
                        name="electricity"
                        value="bad"
                        label="رديئة"
                        checked={electricity === "bad"}
                        onChange={() => setElectricity("bad")}
                      />
                      <Radio
                        name="electricity"
                        value="none"
                        label="منعدمة"
                        checked={electricity === "none"}
                        onChange={() => setElectricity("none")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex flex-col justify-start mt-10 ">
              <Button
                className="w-40 self-center font-Cairo"
                color="teal"
                ripple="light"
                type="submit"
              >
                إضافة
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { Form };
