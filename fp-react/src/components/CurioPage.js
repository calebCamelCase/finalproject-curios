import React, {useState, useEffect} from "react"
import { useParams, Outlet, Link } from "react-router-dom"
import axios from "axios"


export default function CurioPage() {
    
    const [curio, setCurio] = useState({})
    const params = useParams()
    console.log(params);
    const url = `http://localhost:3001/api/curio/${params.id}`

    useEffect(()=> {
        axios.get(url)
            .then(res => {
                setCurio(res.data)
            })
    }, [])

    console.log(curio);
    return(
        <>
            <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 curio-page">
                        <h2 className="product-name text-capitalize">{curio.curio_name}</h2>
                        <img src={curio.curio_image} alt={curio.curio_name} className="img-fluid placeholder-image product-img" />
                    </div>
                    <div className="col-md-6 curio-page">
                        <ul className="list-group curio-info">
                            <li className="list-group-item curio-info-type">${curio.curio_price}</li>
                            <li className="list-group-item curio-info-type">{curio.in_stock}</li>
                            <li className="list-group-item curio-info-type">{curio.curio_description}</li>
                            {/* <li className="list-group-item curio-info-type">{curio.date_acquired}</li> */}
                        </ul>
                    </div>
                </div>
{/*                 <section className="row related-products-row">
                    <h2 className="related-product-header text-capitalize">try our other products</h2>
                    <div className="col-md-2">
                        <Link to="/product/:id" className="product product-other d-flex">
                            <img src="https://via.placeholder.com/150x150" alt="placeholder" className="img-fluid placeholder-image" />
                        </Link>
                        </div>
                    <div className="col-md-2">
                        <Link to="/product/:id" className="product product-other d-flex">
                            <img src="https://via.placeholder.com/150x150" alt="placeholder" className="img-fluid placeholder-image" />
                        </Link>
                        </div>
                    <div className="col-md-2">
                        <Link to="/product/:id" className="product product-other d-flex">
                            <img src="https://via.placeholder.com/150x150" alt="placeholder" className="img-fluid placeholder-image" />
                        </Link>
                        </div>
                    <div className="col-md-2">
                        <Link to="/product/:id" className="product product-other d-none d-sm-flex">
                            <img src="https://via.placeholder.com/150x150" alt="placeholder" className="img-fluid placeholder-image" />
                        </Link>
                        </div>
                    <div className="col-md-2">
                        <Link to="/product/:id" className="product product-other d-none d-sm-flex">
                            <img src="https://via.placeholder.com/150x150" alt="placeholder" className="img-fluid placeholder-image" />
                        </Link>
                        </div>
                    <div className="col-md-2">
                        <Link to="/product/:id" className="product product-other d-none d-sm-flex">
                            <img src="https://via.placeholder.com/150x150" alt="placeholder" className="img-fluid placeholder-image" />
                        </Link>
                        </div>
                </section>
            <Outlet />
 */}           
            </div>
            </main>

        </>
    )
}