// Card Component //

import { Link } from 'react-router-dom'

const CityCard = ({ name, imageUrl, status, populationCount, numberOfContributions }) => {

  return (

    <div className="w-full bg-app--light border border-app--dark shadow-md flex-col gap-4 rounded-lg justify-center items-center flex p-4">

      <div className="relative w-full h-60 rounded-lg overflow-hidden">
        <div className={`chip flex justify-center rounded-full absolute left-1 top-1 items-center px-4 py-1 ${status ? 'bg-green-400' : ' bg-red-400'} text-white`}>
          <p className="text-xs font-semibold">
            {status ? 'مساعدة' : 'منكوبة'}
          </p>
        </div>
        <img src={imageUrl} alt="card" className="w-full h-full object-cover object-center" />
      </div>

      <div className="flex flex-col w-full text-rtl gap-4">

        <div className="title">{name}</div>
        <div className="text flex justify-between">
          <div>عدد الساكنة</div>
          <div>{populationCount}</div>
        </div>
        <div className="text flex justify-between">
          <div>عدد المساهمات</div>
          <div>{numberOfContributions}</div>
        </div>
        <div className="w-full flex justify-start">
          <Link to="/vile" className="btn-dark" >المزيد من المعلومات</Link>
        </div>

      </div>

    </div>

  )

}

export { CityCard }