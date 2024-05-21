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
}))

export default useWithdrawModalStore