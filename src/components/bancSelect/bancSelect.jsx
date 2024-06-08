
import bancList from './bancList'
const BancSelect = ({change,name}) => {
    return (
        <select onChange={change} className='form-select' name={name}>
            {bancList.map(banc => {
                return <option key={banc.code} value={banc.name}> {banc.name} - {banc.code} </option>
            })}
        </select>
    )
}

export default BancSelect