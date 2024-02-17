
import Guard from '../components/Guard'
import useUsers from '../hooks/useUsers'
const Users = () => {
    const { users } = useUsers()
    return (<>
        <Guard />
        <h2> Administracion de usuarios </h2>
        <hr />
        {users && users.map((i, index) => {
            return (<div key={index}>
                {i.name}
            </div>)
        })}
    </>)

}
export default Users