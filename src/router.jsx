import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Dashboard from "./pages/dashboard/dashboard"
import Users from "./pages/users/users"
import Loterias from "./pages/dashboard/loterias"
import Ganadores from "./pages/dashboard/ganadores"
import Metodos from "./pages/metodos/metodos"
import Quinielas from "./pages/dashboard/quinielas"
import Ventas from "./pages/ventas/ventas"
import Recuperacion from "./pages/auth/recuperacion"
import AddUsers from "./pages/users/addUsers"
import EditUser from "./pages/users/editUser"
import Print from "./pages/dashboard/print"
import Cargar from "./pages/dashboard/cargar"
import Reporte from "./pages/dashboard/reporte"
import Config from "./pages/dashboard/config"
import Home from "./pages/client/home/home"
import Register from "./pages/auth/register"

const Router = () => {
    return (<>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recuperacion" element={<Recuperacion />} />
            <Route path="/print" element={<Print />} />

            <Route path="/dashboard/users" element={<Dashboard><Users /></Dashboard>} />
            <Route path="/dashboard/addUsers" element={<Dashboard><AddUsers /></Dashboard>} />
            <Route path="/dashboard/editUser" element={<Dashboard><EditUser /></Dashboard>} />
            <Route path="/dashboard/metodos" element={<Dashboard><Metodos /></Dashboard>} />
            <Route path="/dashboard/reporte" element={<Dashboard><Reporte /></Dashboard>} />
            <Route path="/dashboard/config" element={<Dashboard><Config /></Dashboard>} />

            <Route path="/dashboard/loterias" element={<Dashboard><Loterias /></Dashboard>} />
            <Route path="/dashboard/ganadores" element={<Dashboard><Ganadores /></Dashboard>} />
            <Route path="/dashboard/quinielas" element={<Dashboard><Quinielas /></Dashboard>} />
            <Route path="/dashboard/ventas" element={<Dashboard><Ventas /></Dashboard>} />
            <Route path="/dashboard/cargar" element={<Dashboard><Cargar /></Dashboard>} />


            <Route path="/*" element={<div className="NotFound404">404 Not found</div>} />
        </Routes>
    </>)
}

export default Router