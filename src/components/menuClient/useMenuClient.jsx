/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useUserStore from "../../store/userStore"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const useMenuClient = () => {

    const [expanded, setExpanded] = useState(false)
    const [activePath, setActivePath] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const { setUser, user } = useUserStore()

    const handleToggleMenu = () => setExpanded(!expanded)

    const handleClose = () => {
        localStorage.removeItem('user')
        setUser({ _id: '', level: 0 })
        navigate('/login')
        return null
    }

    const NavLink = ({ direction, to, icon, click }) => {
        return (
            <Nav.Link onClick={click} as={Link} to={to}>
                <Tooltip id={direction} />
                <i data-tooltip-id={direction} data-tooltip-content={direction} className={`bi ${icon} ${activePath === to && 'active'}`}></i>
            </Nav.Link>

        )
    }

    useEffect(() => {
        setActivePath(location.pathname)
        setExpanded(!expanded)
    }, [location])


    return {
        handleClose,
        handleToggleMenu,
        NavLink,
        user
    }
}

export default useMenuClient