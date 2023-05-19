import { Outlet, Link } from "react-router-dom"

export default function Header() {
    return(
        <header className="header " id="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title text-uppercase" id="logo"><Link to='/'>wendigo curio comporium</Link></h1>
                    </div>
                    <div className="col-md-6">
                        <nav className="nav-list nav-top">
                            <ul className="nav justify-content-around">
                                <li className="nav-item"><Link to='/' className="nav-link ">home</Link></li>
                                <li className="nav-item"><Link to='/menu' className="nav-link ">store</Link></li>
                                <li className="nav-item"><Link to='/login' className="nav-link ">sign in</Link></li>
                            </ul>
                            <Outlet />
                        </nav>
                    </div>
                    {/* <h2 className="welcome">welcome to the shop</h2> */}
                </div>
            </div>
        </header>
    )
}