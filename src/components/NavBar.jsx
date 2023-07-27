import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">Shoppinf Cart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                        </ul>
                        <NavLink to='shopping'  >
                            <Badge badgeContent={listaCompras.length} color="success">
                                <ShoppingCart color="action" />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>


        </>
    )
}