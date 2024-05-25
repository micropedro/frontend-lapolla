import { createWithEqualityFn } from 'zustand/traditional'
import formatDate from '../services/formatDate'

const useDateStore = createWithEqualityFn((set) => ({
    dateStore: {
        from: formatDate(new Date()).split('/').reverse().join('-'), 
        to: formatDate(new Date()).split('/').reverse().join('-')
    },
    setDateStore: (newDate) => set(() => ({
        dateStore: {...newDate }
    }))
}))

export default useDateStore