/* eslint-disable react/prop-types */
import SideBar from "@/components/sideBar"
import Guard from "@/components/Guard"
const Dashboard = ({ children }) => {

    return (<Guard>
        <div className="container-fluid bg-gray">
            <div className="row g-4">
                <SideBar />
                <div className="col-10 col-md-8 col-lg-9 min-vh-100">
                    {children}
                </div>
            </div>
        </div>
    </Guard>)
}
export default Dashboard