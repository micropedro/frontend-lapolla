
import bancList from './bancList'
const BancSelect = ({name}) => {
    return (
        <select className='form-select' name={name}>
            {bancList.map(banc => {
                return <option key={banc.code} value={banc.name}> {banc.name} - {banc.code} </option>
            })}
        </select>
    )
}

export default BancSelect