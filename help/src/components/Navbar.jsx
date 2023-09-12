// NavBar Component //

import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <div className="navbar">

      <div className="col-span-6 title text-app-primary text-center md:text-start">Earthquake Relief Assistance</div>
      <div className="col-span-6 flex gap-2 text-rtl justify-center md:justify-start">

        <Link to="/">
          <button className="btn-primary">الرئيسية</button>
        </Link>
        <Link to="/cities">
          <button className="btn-primary">القرى</button>
        </Link>
        <Link to="/associations">
          <button className="btn-primary">الجمعيات</button>
        </Link>
        <Link to="/communication">
          <button className="btn-primary">تواصل</button>
        </Link>

      </div>

    </div>
  )

}

export { NavBar }