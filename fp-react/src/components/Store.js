import { Outlet, Link } from "react-router-dom"
import Card from "./Card"

export default function Store(props) {

    const curioCard = props.props.map(item => {

        return <Card 
            id={item.curio_id}
            key={item.curio_id}
            name={item.curio_name}
            image={item.curio_image}
            desc={item.curio_description}
            price={item.curio_price}
        />
    })

    return(
        <>
                <main className="main">
        <section className="container">
            <div className="row product-row">
                {/* <!-- figures or cards instead of divs --> */}
                {curioCard}
                {/* <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
            </div>
            <div className="row product-row d-none d-md-flex">
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
            </div>
            <div className="row product-row d-none d-md-flex">
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
            </div>
            <div className="row product-row d-none d-md-flex">
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div>
                <div className="card curio-card col-md-3">
                    <Link to="/product/:id" className="product text-decoration-none">
                        <img src="https://via.placeholder.com/200x200" alt="placeholder" className="img-fluid card-img-top placeholder-image" />
                    <p className="card-title product-title">Lorem, ipsum.</p>
                </Link>
                </div> */}
                <Outlet />
            </div>
        </section>
    </main>
        </>
    )
}