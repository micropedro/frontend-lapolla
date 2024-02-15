import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import Users from "./pages/users"
import Loterias from "./pages/loterias"
import Ganadores from "./pages/ganadores"
import Metodos from "./pages/metodos"
import Quinielas from "./pages/quinielas"
import Bancos from "./pages/bancos"
import Ventas from "./pages/ventas"
const Router = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/users" element={<Dashboard><Users /></Dashboard>} />
            <Route path="/dashboard/loterias" element={<Dashboard><Loterias /></Dashboard>} />
            <Route path="/dashboard/ganadores" element={<Dashboard><Ganadores /></Dashboard>} />
            <Route path="/dashboard/metodos" element={<Dashboard><Metodos /></Dashboard>} />
            <Route path="/dashboard/quinielas" element={<Dashboard><Quinielas /></Dashboard>} />
            <Route path="/dashboard/bancos" element={<Dashboard><Bancos /></Dashboard>} />
            <Route path="/dashboard/ventas" element={<Dashboard><Ventas /></Dashboard>} />
            <Route path="/*" element={<div className="NotFound404">404 Not found</div>} />
        </Routes>
    </>)
}

export default Router