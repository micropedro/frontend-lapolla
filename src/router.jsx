import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Dashboard from './pages/admin/dashboard/dashboard'
import DashboardClient from './pages/client/dashboard/Dashboard'
import Users from './pages/admin/users/users'
import Loterias from './pages/admin/dashboard/loterias'
import Ganadores from './pages/admin/dashboard/ganadores'
import Metodos from './pages/admin/metodos/metodos'
import Quinielas from './pages/admin/dashboard/quinielas'
import Ventas from './pages/admin/ventas/ventas'
import Recuperacion from './pages/auth/recuperacion'
import AddUsers from './pages/admin/users/addUsers'
import EditUser from './pages/admin/users/editUser'
import Print from './pages/admin/dashboard/print'
import Cargar from './pages/admin/dashboard/cargar'
import Reporte from './pages/admin/dashboard/reporte'
import Config from './pages/admin/dashboard/config'
import Home from './pages/home/home'
import Register from './pages/auth/register'

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

            <Route path="/dashboard/" element={<DashboardClient />} />

            <Route path="/*" element={<div className="NotFound404">404 Not found</div>} />
        </Routes>
    </>)
}

export default Router