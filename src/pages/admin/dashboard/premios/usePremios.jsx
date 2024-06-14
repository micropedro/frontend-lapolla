import usePremiosStore from "./premiosStore"
const usePremios = () => {
    const { modalDatos, setModalDatos } = usePremiosStore()
    return {
        modalDatos,
        setModalDatos
    }
}

export default usePremios