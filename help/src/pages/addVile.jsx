import { Input } from "@material-tailwind/react";
import { RiImageAddFill } from "react-icons/ri";
import StepperWithIcon from "../components/Setps";

const Form = () => {
  return (
    <>
      <div className=" w-full rtl-container h-full flex flex-col justify-start items-start p-2 gap-4 min-h-screen">
        <div className="w-full text-center mt-4 ">
          <p className=" text-slate text-4xl font-semibold ">إضافة دوار جديد</p>
        </div>
        <div className="flex w-full gap-4 mt-20 flex-col items-start justify-start ">
          <div className="w-full text-start">
            <p className="text-slate text-xl font-semibold">معلومات السكان :</p>
          </div>
          <div className="w-full justify-between flex flex-col gap-20 md:flex-row ">
            <div className="rtl-container  w-80 flex justify-center items-start flex-col gap-5">
              <Input
                color="teal"
                className="rtl-container"
                label="عدد السكان :"
              />
              <Input
                color="teal"
                className="rtl-container"
                label="عدد الضحايا المصابين :"
              />
              <Input
                color="teal"
                className="rtl-container"
                label="عدد  الموتى  :"
              />
            </div>
            <div className="rtl-container flex flex-col  items-start gap-4 justify-between">
              <div className="flex justify-between gap-14">
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-slate text-xl font-semibold">
                    اضف صورا للقرية .{" "}
                  </p>
                  <p className="text-muted">
                    لمساعدة الناس الاخرين للتعرف على المنطقة.
                  </p>
                </div>
                <div className="flex w-52 bg-mutedLight rounded-md relative  h-52 justify-center items-center">
                  <Input
                    type="file"
                    color="teal"
                    id="fileInput"
                    className="rtl-container absolute inset-0 hidden"
                  />
                  <label
                    htmlFor="fileInput"
                    className="w-full absolute flex justify-center items-center left-0 top-0 h-full  cursor-pointer"
                  >
                    <RiImageAddFill className="text-4xl text-slate/40" />
                  </label>
                </div>
              </div>
              <div className="w-full grid grid-cols-5 gap-2">
                <div className="w-[80%] col-span-1 h-20 rounded-sm aspect-square bg-muted">
                </div>
                <div className="w-[80%] col-span-1 h-20 rounded-sm aspect-square bg-muted">
                </div>
                <div className="w-[80%] col-span-1 h-20 rounded-sm aspect-square bg-muted">
                </div>
                <div className="w-[80%] col-span-1 h-20 rounded-sm aspect-square bg-muted">
                </div>
                <div className="w-[80%] col-span-1 h-20 rounded-sm aspect-square bg-muted">
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rtl-container">
          <StepperWithIcon/>
          </div>
        </div>
      </div>
    </>
  );
};

export { Form };
