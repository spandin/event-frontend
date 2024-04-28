import { create } from 'zustand'
import { User } from '../types'

interface AuthState {
  user: User | null
  isInitialized: boolean
  isLoading: boolean

  setUser: (user: User) => void
  setIsInitialized: (isInitialized: boolean) => void
  setIsLoading: (isLoading: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isInitialized: false,
  isLoading: false,

  setUser: (user) => set({ user }),
  setIsInitialized: (isInitialized) => set({ isInitialized }),
  setIsLoading: (isLoading) => set({ isLoading })
}))
