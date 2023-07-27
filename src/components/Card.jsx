import { useState } from "react"
import '../style/card.css'

export const Card = ({ id, imagen, titulo, description, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false)

    const clickQuitar = () => {
        setAdded(false)
        handleQuitar()
    }

    const clickAgregar = () => {
        setAdded(true)
        handleAgregar()
    }

    return (
        <div className="tarjeta" key={id}>
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{description}</p>
                <p className="tarjeta-precio">{precio}</p>

                {
                    added
                        ? <button
                            type="button"
                            className="boton-quitar"
                            onClick={clickQuitar}
                        >Quitar del Carrito</button>
                        : <button
                            type="button"
                            className="boton-agregar"
                            onClick={clickAgregar}
                        >Agregar Carrito</button>
                }
            </div>

        </div>
    )
}
