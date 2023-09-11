import React from 'react';
import { Link } from 'react-router-dom';

function Card({ name, count, imageUrl, numberD }) {
  return (
    <div className="w-full font-Cairo rtl-card flex-col relative rounded-md justify-center items-center flex p-3 overflow-hidden col-span-1">
      <div className="img-container w-full rounded-md overflow-hidden">
        <img src={imageUrl} alt="card" className="w-full h-full object-cover object-center" />
      </div>
      <div className="card-info">
        <div className="name">
          <h3 className=" font-semibold ">
            {name}
          </h3>
        </div>
        <div className="card-info flex justify-start items-start gap-1 flex-col">
          <p>
            {count}
          </p>
          <p>
            {numberD}
          </p>
        </div>
        <Link to="/vile" className="flex text-slat items-center">
            اقرأ المزيد
        </Link>
      </div>
    </div>
  );
}

export default Card;
