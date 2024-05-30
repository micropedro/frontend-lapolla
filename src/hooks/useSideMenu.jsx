import { useEffect, useState } from "react"
import useRetiros from '../hooks/useRetiros';
import useRetiroStore from '../store/retirosStore';
import { menu } from '../services/menuLateral.json'
const useSideMenu = () => {
    const { retiros } = useRetiroStore()
    const { getRetiros } = useRetiros()

    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const direction = menu.map((it, idx) => {
            return { link: it.link, id: idx }
        }).filter(item => item.link === window.location.pathname)[0]?.id
        if (direction) setSelected(direction)
        getRetiros()
    }, [])

    const Pending = ({ index }) => {
        if (index === 5 && retiros.filter(i => i.state === 1).length > 0) {
            return <i className='bg-danger rounded px-1 text-white'> {retiros.filter(i => i.state === 1).length} </i>
        }
    }

    return { setSelected, selected, Pending }

}


export default useSideMenu