import { Outlet, Link } from "react-router-dom"

export default function Card(props) {
    
    return(
        <>
            <div className="card curio-card col-md-3">
                <Link to={`/product/${props.id}`} className="product text-decoration-none">
                <figure className="card-fig">
                    <img src={props.image} alt={props.desc} className="img-fluid card-img-top placeholder-image" />
                    <figcaption className="card-title text-capitalize product-title">{props.name}</figcaption>
                </figure>
                </Link>
            </div>
                <Outlet />
        </>
    )
}

