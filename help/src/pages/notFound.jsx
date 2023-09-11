// Not Found Page

import { Link } from "react-router-dom";

const notFound = () => {

  return (
    <div className="section">

        <div className="title">
          404 Page is not found!
        </div>
        
        <Link className="text" to="/">
          Go back home
        </Link>

    </div>
  )
  
}

export default notFound