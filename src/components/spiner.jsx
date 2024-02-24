// eslint-disable-next-line react/prop-types
const Spinner = ({ color }) => {
    return (<>
        <div
            className="spinner-border"
            style={color ? { color } : { color: 'white' }}
            role="status" />
    </>
    )
}

export default Spinner