export default function cash(number) {
    /* const nweMoney = money.toFixed(2);
    return nweMoney */
    /* const formattedNumber = number.toLocaleString('es-ES', {
        minimumFractionDigits: 2,
    }) */

    const money = (Math.floor(number * 100)) / 100

    return money

}