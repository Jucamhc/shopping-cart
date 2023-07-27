import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const handleImpresion = () => {
        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listaCompras.map(lista => (
                            <tr key={lista.id}>
                                <th >{lista.title}</th>
                                <td>{lista.price}</td>
                                <td>

                                    <button
                                        type="buton"
                                        className="btn btn-ouline-primary"
                                        onClick={() => aumentarCantidad(lista.id)}
                                    >
                                        +
                                    </button>

                                    <button className="btn btn-primary">{lista.cantidad}</button>

                                    <button
                                        type="buton"
                                        className="btn btn-ouline-primary"
                                        onClick={() => disminuirCantidad(lista.id)}
                                    > -
                                    </button>

                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => eliminarCompra(lista.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th><b>Total: </b></th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </tr>

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary"
                    onClick={handleImpresion}
                    disabled={listaCompras < 1}>
                    Comprar
                </button>
            </div>
        </>
    )
}
