import PropsTypes from 'prop-types'
import SideBar from '../../../components/sideBar'
import Guard from '../../../components/Guard'
const Dashboard = ({ children }) => {

    return (<Guard>
        <div className="container-fluid bg-gray">
            <div className="row g-0">
                <div className="col-12 bg-danger display-screen">
                    <div className="bg-dark text-light vh-100 scroll section-side">
                        <SideBar />
                    </div >
                    <div className="vh-100 scroll section-content bg-gray">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </Guard>)
}

Dashboard.propTypes = {
    children: PropsTypes.element.isRequired
}

export default Dashboard