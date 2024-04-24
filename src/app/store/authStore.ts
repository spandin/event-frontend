import { create } from 'zustand'
import { type User } from '@/shared'

interface AuthState {
  user: User | null
  error: string
  isLoading: boolean

  setUser: (user: User) => void
  setError: (error: string) => void
  setIsLoading: (isLoading: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: '',
  isLoading: false,

  setUser: (user) => set({ user }),
  setError: (error) => set({ error }),
  setIsLoading: (isLoading) => set({ isLoading })
}))
