const Hora = ({ handleHora, hora }) => {
    return (
        <select defaultValue={hora} className="btn-cargar" name="hora" id="hora" onChange={(e) => handleHora(e.target.value)}>
            <option value={10}> 10 AM </option>
            <option value={11}> 11 AM </option>
            <option value={12}> 12 AM </option>
            <option value={13}> 1 PM  </option>
            <option value={14}> 2 PM  </option>
            <option value={15}> 3 PM  </option>
            <option value={16}> 4 PM  </option>
            <option value={17}> 5 PM  </option>
            <option value={18}> 6 PM  </option>
            <option value={19}> 7 PM  </option>
            <option value={20}> 8 PM  </option>
            <option value={21}> 9 PM  </option>
        </select>
    )
}

export default Hora