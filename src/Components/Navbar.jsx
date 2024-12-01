import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <div>
      <header>
        <div className="container-fluid d-flex justify-content-between py-3 bg-dark align-items-center text-white">
            <div className="logo">
                <h2 style={{color: "whitesmoke"}}><i>FLASH NEWS</i></h2>
            </div>
            <div className="nav-items">
                <ul className="d-flex justify-content-center align-items-center gap-5 my-3 flex-wrap fs-5">
               <Link to="/"><li><i>Home</i></li></Link>
               <Link to="/importantnews"><li><i>Important News</i></li></Link>
                </ul>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
