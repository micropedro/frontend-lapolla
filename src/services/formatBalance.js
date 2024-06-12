export const formatBalance = (balance = 0)=>{
    if(balance) return balance.toFixed(2)
    else return 0
}