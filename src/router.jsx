import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Dashboard from './pages/admin/dashboard/dashboard'
import Lobby from './pages/client/lobby/Lobby'
import Perfil from './pages/client/perfil/Perfil'
import Transactions from './pages/client/transactions/Transactions'
import Support from './pages/client/support/Support'
import History from './pages/client/history/History'
import Users from './pages/admin/users/users'
import Loterias from './pages/admin/dashboard/loterias'
import Ganadores from './pages/admin/dashboard/ganadores'
import Metodos from './pages/admin/dashboard/metodos'
import Quinielas from './pages/admin/dashboard/quinielas'
import Ventas from './pages/admin/ventas/ventas'
import Recuperacion from './pages/auth/recuperacion'
import AddUsers from './pages/admin/users/addUsers'
import EditUser from './pages/admin/users/editUser'
import Print from './pages/admin/dashboard/print'
import Cargar from './pages/admin/dashboard/cargar'
import Reporte from './pages/admin/dashboard/reporte'
import Config from './pages/admin/dashboard/config'
import Depositos from './pages/admin/dashboard/depositos/depositos'
import Home from './pages/home/home'
import Register from './pages/auth/register'
import Mini from './pages/client/mini/Mini'
import Quiniela from './pages/client/quiniela/Quiniela'
import TemplateClient from './components/templateClient/TemplateClient'
import Mensajes from './pages/admin/dashboard/mensajes'

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
            <Route path="/dashboard/depositos" element={<Dashboard><Depositos /></Dashboard>} />
            <Route path="/dashboard/mensajes" element={<Dashboard><Mensajes /></Dashboard>} />

            <Route path="/dashboard/loterias" element={<Dashboard><Loterias /></Dashboard>} />
            <Route path="/dashboard/ganadores" element={<Dashboard><Ganadores /></Dashboard>} />
            <Route path="/dashboard/quinielas" element={<Dashboard><Quinielas /></Dashboard>} />
            <Route path="/dashboard/ventas" element={<Dashboard><Ventas /></Dashboard>} />
            <Route path="/dashboard/cargar" element={<Dashboard><Cargar /></Dashboard>} />

            <Route element={<TemplateClient />}>
                <Route path="/lobby/" element={<Lobby />} />
                <Route path="/mini/" element={<Mini />} />
                <Route path="/quiniela/" element={<Quiniela />} />
                <Route path="/history/" element={<History />} />
                <Route path="/perfil/" element={<Perfil />} />
                <Route path="/transactions/" element={<Transactions />} />
                <Route path="/support/" element={<Support />} />
            </Route>

            <Route path="/*" element={<div className="NotFound404">404 Not found</div>} />
        </Routes>
    </>)
}



export default Router