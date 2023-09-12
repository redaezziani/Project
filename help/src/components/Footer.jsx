// Footer Component //

const Footer = () => {

    return (
        <div className="w-full rtl-container h-fit bg-mutedLight flex flex-col justify-center items-start border-t border-emerald p-10">
            <div className="w-full text-center">
                <p className=" font-semibold">
                Maroc Solidarité
                </p>
                <div className="w-full mt-7 flex flex-col gap-4 justify-between items-center md:flex-row">
                    <div className="info w-full md:w-[50%] flex justify-between items-start ">
                        <div className="call flex  flex-col gap-3 justify-start items-start">
                            <div className="text-emerald text-lg font-semibold">
                                إتصل بنا
                            </div>
                            <div className=" text-slate">
                              :اتصل بنا
                            </div>
                            <div
                            className=" text-muted hover:text-emerald transition-colors cursor-pointer"
                            >
                            الأسئلة المتكررة.
                            </div>
                        </div>
                        <div className=" gap-3 flex flex-col justify-start items-start">
                            <div className="text-emerald text-lg font-semibold">
                                الشروط والسياسات
                            </div>
                            <div className="text-slate">
                                <a href="https://www.google.com">الشروط والسياسات</a>
                            </div>
                        </div>
                    </div>
                    <div className="img-logo">
                        <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/12/291752.jpg"
                        className="w-40 md:w-60 h-auto aspect-square rounded-full border-2 border-emerald"
                        alt="Logo"  />
                    </div>
                </div>
            </div>
        </div>
    )

}

export { Footer }