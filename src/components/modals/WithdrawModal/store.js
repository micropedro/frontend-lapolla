import { createWithEqualityFn } from 'zustand/traditional'

const useWithdrawModalStore = createWithEqualityFn((set) => ({
    
    amount: '',
    setAmount: (newAmount) => set(() => ({
        amount: newAmount
    })),

    methodSelected: '',
    setMethodSelected: (newMethodSelected) => set(() => ({
        methodSelected: newMethodSelected
    })),
    totalAmount:0, 
    setTotalAmount: (newtotalAmount) => set(() => ({
        totalAmount: newtotalAmount
    })),
}))

export default useWithdrawModalStore