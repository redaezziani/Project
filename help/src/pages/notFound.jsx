// Not Found Page //
import LottieAnimation from "../components/Animation";
import { Link } from "react-router-dom";
import {motion , AnimatePresence} from 'framer-motion'
const animationsButton = {
  show:{
    opacity:1,
    scale:1
  },
  hidden:{
    opacity:0,
    scale:0.5
  }
}
const animationsText = {
  show:{
    opacity:1,
    scale:1
  },
  hidden:{
    opacity:0,
    scale:0.5
  }
}
const NotFound = () => {

  return (
      <div className="w-full h-screen relative justify-center items-center flex-col gap-1 flex rtl-container">
        <div className="absolute -z-[1] w-full inset-0 bg-cover bg-[url('./assets/images/AboveTheFoldBackground.png')]">
          <div className="w-full h-full bg-repeat filter hue-rotate-180 bg-[url('./assets/images/decorationBlockLight.svg')] dark:bg-[url('./assets/decorationBlockDark.svg')]" style={{WebkitMaskImage: 'radial-gradient(70% 70% at 50.00% 30%, #000 0%, rgba(0, 0, 0, 0.25) 100%)'}}></div>
        </div>
        <AnimatePresence>
        <LottieAnimation />
        <motion.h2
        variants={animationsText}
        initial={'hidden'}
        animate={'show'}
        transition={{ duration:.3, type:'spring', stiffness:100}}
        className="text-center font-Cairo text-3xl font-semibold text-slate">الصفحة غير موجودة</motion.h2>
        <Link
        variants={animationsButton}
        initial={'hidden'}
        animate={'show'}
        transition={{ duration:.3, type:'spring', stiffness:100}}
        to="/" className="flex px-3 py-2 bg-emerald text-white rounded-md mt-4 justify-center  items-center gap-2">
          العودة الى الصفحة الرئيسية
        </Link>
        </AnimatePresence>
    </div>
  )

}

export { NotFound } 