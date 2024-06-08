import menuLateral from '../services/menuLateral.json'
class Permisions {
    guard = [1, 2, 3, 4]
    addUser = [1, 2, 3]
    editUser = [1, 2, 3]

    taquilla = [4]
    reporte = [2,3,4]
    ticketsVendidos = [4]

    userBtnAdmin = [1]
    userBtnGroup = [1,2]
    userBtnAgencia = [1,2,3]
    userBtnClient = [1]

    levelUserDirection = ['/',
        '/dashboard/users',
        '/dashboard/users',
        '/dashboard/users',
        '/dashboard/ventas',
        '/Lobby']

    getUser = () => {
        const localUser = localStorage.getItem('user')
        if (localUser) {
            return JSON.parse(localUser)
        }
        return false
    }

    permit = (indexMenu) => {
        if (!this.getUser() || !menuLateral.menu[indexMenu].permissions.includes(this.getUser().level)) {
            localStorage.removeItem('user')
            return false
        }
        return true
    }
}

const permisions = new Permisions

export default permisions