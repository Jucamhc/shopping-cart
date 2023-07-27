import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/carritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/shopping-cart/" element={<ComprasPage />}></Route>
                        <Route path="/shopping-cart/shopping" element={<CarritoPage />}></Route>
                        <Route path="/*" element={<Navigate to={'/'} />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
