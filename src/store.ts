import { create } from 'zustand'

export type loginStoreType={
    isLogin: boolean,
    setLogin: (state: boolean) => void
}

export const useLoginStore = create<loginStoreType>((set) => ({
    isLogin: false,
    setLogin: (state: boolean) => set({ isLogin: state }),
}))