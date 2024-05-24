/* eslint-disable react-hooks/exhaustive-deps */
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import RouterX from './router'
import Notification from './components/notification'
import useInitApp from './hooks/useInitApp'
import DevEnvironment from './components/devEnvironment'
import LoadingModal from './components/modals/loadingModal'
import 'react-toastify/dist/ReactToastify.css'
import useNotify from './hooks/useNotify'
import './css/tostify.css'
import Modal from './components/modals/modal'
import { useEffect } from 'react'
const App = () => {
    const { ToastContainer } = useNotify()
    const { initApp } = useInitApp()
    useEffect(() => { initApp() }, [])

    return (<>
        <Modal />
        <ToastContainer theme="dark" />
        <LoadingModal />
        <DevEnvironment />
        <Notification />
        <RouterX />
    </>
    )
}
export default App