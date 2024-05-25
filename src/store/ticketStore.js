import { createWithEqualityFn } from 'zustand/traditional'

const useTicketStore = createWithEqualityFn((set) => ({
    animals: [],
    setAnimals: (newAnimals) => set(() => ({
        animals: newAnimals
    })),
    visible: false,
    setVisible: (newVisible) => set(() => ({
        visible: newVisible
    })),
    type: false,
    setType: (newType) => set(() => ({
        type: newType
    })),
    ticketCode: "",
    setTicketCode: (newTicketCode) => set(() => ({
        ticketCode: newTicketCode
    })),
    ticket: false,
    setTicket: (newTicket) => set(() => ({
        ticket: newTicket
    })),
    tickets: false,
    setTickets: (newTickets) => set(() => ({
        tickets: newTickets
    }))
}))

export default useTicketStore