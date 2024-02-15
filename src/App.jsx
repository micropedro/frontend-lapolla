import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import Router from './router'
import Notification from './components/notification'
import { useEffect } from 'react'
import useUserStore from './store/userStore'
const App = () => {
  const {setUser} = useUserStore()
  const initApp = () => {
    console.log("Inicializando applicacion")
    const user = localStorage.getItem('user')
    if(user){
      setUser(user)
    }
  }
  useEffect(()=>(initApp),[])
  return (<>
    <Notification />
    <Router />
  </>)
}
export default App