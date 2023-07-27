import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext)
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }


  return (
    <>
      <h1>Compras</h1>
      <hr />

      {productos.map(pro => (
        <Card
          key={pro.id}
          id={pro.id}
          imagen={pro.image}
          titulo={pro.title}
          description={pro.description}
          precio={pro.price}
          handleAgregar={() => handleAgregar(pro)}
          handleQuitar={() => handleQuitar(pro.id)}
        >

        </Card>
      ))}
    </>
  )
}
