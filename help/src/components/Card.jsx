import { Link } from 'react-router-dom';
//lets get curent params
 



function Card({ name, count, imageUrl, numberD , status}) {
  return (
    <div className="w-full relative bg-gray-300 shadow-md font-Cairo rtl-card flex-col  rounded-md justify-center items-center flex p-3 overflow-hidden col-span-1">
      <div className="img-container relative w-full h-40 rounded-md overflow-hidden">
      <div className={`chip flex justify-center rounded-md absolute left-1 top-1 items-center px-4 py-1 ${status=='منكوبة'?'bg-red-600':' bg-green-500'} text-white`}>
        <p className="text-xs font-semibold">
          {status}
        </p>
      </div>
        <img src={imageUrl} alt="card" className="w-full h-full object-cover object-center" />
      </div>

      <div className="card-info mt-3 w-full">
        <div className="name">
          <h3 className=" font-semibold ">
            {name}
          </h3>
        </div>
        <div className="card-info text-gray-500 w-full flex justify-start items-start gap-2 flex-col">
          <p>
            {count}
          </p>
          <p>
            {numberD}
          </p>
        </div>
        <Link to="/vile" className="flex cursor-pointer text-gray-600 mt-2 text-slat items-center">
            اقرأ المزيد
        </Link>
      </div>
    </div>
  );
}

export default Card;
