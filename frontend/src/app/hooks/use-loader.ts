


import { create } from 'zustand'
interface LoaderState {
    show_loader?:  boolean
    set_show_loader: (isLoading?: boolean) => void
  }
const useLoader =  create<LoaderState>((set,prev) => ({
    show_loader: true,
    set_show_loader: (isLoading?:boolean) => set({ show_loader:isLoading }),
}))


export {
    useLoader
}
