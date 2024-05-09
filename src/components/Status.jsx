/* eslint-disable react/prop-types */
const Status = ({ status }) => {
    return status == 1 ?
        <div className="bg-warning text-center text-light"> Pediente </div>
        : <div className="bg-success text-center text-light" > Aprobado  </div>
}

export default Status