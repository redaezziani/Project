// Footer Component //

const Footer = () => {

    return (
        <div className="w-full rtl-container h-fit bg-app-light flex flex-col justify-center items-start border-t border-app--light p-10">
            <div className="w-full text-center">
                <p className="text-2xl font-black pb-4 border-b border-app--light">
                    Maroc Solidarité
                </p>
                <div className="w-full mt-7 flex flex-col gap-4 justify-between items-center md:flex-row">
                    <div className="info w-full md:w-[50%] flex justify-between items-start ">
                        <div className="call flex  flex-col gap-3 justify-start items-start">
                            <div className="text-lg font-bold">
                                إتصل بنا
                            </div>
                            <div className="text-app--dark text-sm">
                                <a href="/communication">اتصل بنا</a>
                            </div>
                            <div
                                className="text-app--dark text-sm"
                            >
                                <a href="#">الأسئلة المتكررة.</a>
                            </div>
                        </div>
                        <div className=" gap-3 flex flex-col justify-start items-start">
                            <div className="text-lg font-bold">
                                الشروط والسياسات
                            </div>
                            <div className="text-app--dark text-sm">
                                <a href="https://www.google.com">شروط الإستخدام.</a>
                            </div>
                            <div className="text-app--dark text-sm">
                                <a href="https://www.google.com">سياسة الخصوصية .</a>
                            </div>
                        </div>
                    </div>
                    <div className="img-logo">
                        <img src="/hero.jpg"
                            className="w-40 md:w-60 h-auto aspect-square rounded-full"
                            alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export { Footer }