import PropsTypes from "prop-types"

const Spinner = ({ color }) =>
    <div className="spinner-border" style={color ? { color } : { color: 'white' }} role="status" />

Spinner.propTypes = {
    color: PropsTypes.string.isRequired
}

    export default Spinner