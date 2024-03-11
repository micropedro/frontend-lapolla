/* eslint-disable react-hooks/exhaustive-deps */
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import RouterX from './router'
import Notification from './components/notification'
import { useEffect } from 'react'
import useInitApp from './hooks/useInitApp'
import DevEnvironment from './components/devEnvironment'
import LoadingModal from './components/modals/loadingModal'
import 'react-toastify/dist/ReactToastify.css'
import useNotify from './hooks/useNotify'
import './css/tostify.css'
const App = () => {
  const { ToastContainer } = useNotify()
  const { initApp } = useInitApp()
  useEffect(() => { initApp() }, [])

  return (<>
    <ToastContainer theme="dark" />
    <LoadingModal />
    <DevEnvironment />
    <Notification />
    <RouterX />
  </>
  )
}
export default App