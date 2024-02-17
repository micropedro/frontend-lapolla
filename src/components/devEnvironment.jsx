import { devEnvironmet } from '../../config.json'
const DevEnvironment = () => {
    if (devEnvironmet) {
        return (
            <div className="devEnvironment">
                Environment : DEV
            </div>
        )
    }
}
export default DevEnvironment
