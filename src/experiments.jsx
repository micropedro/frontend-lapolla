import { useState } from "react"
const Experiments = () => {

    const [sizea, setSizea] = useState(30)
    const [sizeb, setSizeb] = useState(70)
    const [moving, setMoving] = useState(false)

    const move = (e) => {
        if (moving) {
            setSizea(e.screenX / window.innerWidth * 100)
            setSizeb(100 - e.screenX / window.innerWidth * 100)
        }
    }

    return (
        <div style={{ width: window.innerWidth }} className="experiment-wrap d-flex">
            <div onMouseUp={() => setMoving(false)} onMouseMove={move} className="ex1" style={{ userSelect: 'none', color: "white", width: `${sizea}%` }}>

            </div>
            <div onMouseUp={() => setMoving(false)} onMouseMove={move} className="ex3 text-light" style={{ userSelect: 'none', width: `${sizeb}%` }}>

            </div>
            <div onMouseMove={move} onMouseUp={() => setMoving(false)} onMouseDown={() => setMoving(true)} className="ex2" style={{ left: `${sizea - 1}%` }}>

            </div>
        </div>
    )
}

export default Experiments