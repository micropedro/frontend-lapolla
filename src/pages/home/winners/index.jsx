const Winners = () => {
    return (<><>
        <div className="card text-bg-secondary p-3">
            <div>
                <h2>Ganadores</h2>
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
                <WinnerDetails />
            </div>
            <button type="button" className="btn btn-default">Ver mas</button>
        </div>
        <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary btn-lg m-2">Jugar Ahora</button>
        </div>
    </></>)
}

const WinnerDetails = () => {
    return (
        <div className="card text-bg-primary mb-3">
            <p>Gran quiniela 26/08/2024</p>
        </div>)
}

export default Winners