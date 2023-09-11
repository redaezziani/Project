// Card

import { Link } from 'react-router-dom'
// lets get curent params

function Card({ name, count, imageUrl, numberD, status }) {

  return (

    <div className="w-full relative bg-app--light shadow-md font-Cairo rtl-card flex-col gap-4 rounded-md justify-center items-center flex p-3 overflow-hidden col-span-1">

      <div className="img-container relative w-full h-40 rounded-md overflow-hidden">
        <div className={`chip flex justify-center rounded-md absolute left-1 top-1 items-center px-4 py-1 ${status == 'منكوبة' ? 'bg-red-600' : ' bg-green-500'} text-white`}>
          <p className="text-xs font-semibold">
            {status}
          </p>
        </div>
        <img src={imageUrl} alt="card" className="w-full h-full object-cover object-center" />
      </div>

      <div className="card-info mt-3 w-full">
        <div className="name">
          <div className="title">
            {name}
          </div>
        </div>
        <div className="card-info text-gray-500 w-full flex justify-start items-start gap-2 flex-col">
          <div className='text'>
            {count}
          </div>
          <div className='text'>
            {numberD}
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <Link to="/vile" className="btn-primary" >
            اقرأ المزيد
          </Link>
        </div>
      </div>

    </div>

  )

}

export default Card