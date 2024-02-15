/* eslint-disable react/prop-types */
import SideBar from "../components/sideBar"
const Dashboard = ({children}) => {
    return (<>
        <div className="container-fluid">
            <div className="row g-4">
                <SideBar />
                <div className="col-10 col-md-8 col-lg-9 min-vh-100">
                    {children}
                </div>
            </div>
        </div>
    </>)
}
export default Dashboard