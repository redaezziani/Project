import { Link } from "react-router-dom";

const notFound = () => {

  return (
    <div className='section'>

        <h1 className="text-2xl font-black font-Cairo">
          404 Page is not found
        </h1>
        <Link className="text-sm font-bold font-Cairo" to="/">
          Go back home
        </Link>

    </div>
  )
  
}

export default notFound