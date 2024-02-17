/* eslint-disable react-hooks/exhaustive-deps */
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import Router from './router'
import Notification from './components/notification'
import { useEffect } from 'react'
import useInitApp from './hooks/useInitApp'
import DevEnvironment from './components/devEnvironment'
const App = () => {
  const { initApp } = useInitApp()
  useEffect(() => (initApp), [])
  return (<>
    <DevEnvironment />
    <Notification />
    <Router />
  </>)
}
export default App