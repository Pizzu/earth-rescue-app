import { ISignupInput } from '@type/forms';
import { create } from 'zustand';

export const useAuthStore = create<{
  signUpPayload: ISignupInput;
  isAuthLoading: boolean;
  showCode: boolean;
  error: string | null;
  setIsAuthLoading: (isAuthLoading: boolean) => void;
  setError: (error: string | null) => void;
  setShowCode: (showCode: boolean) => void;
  setSignUpPayload: (signUpPayload: ISignupInput) => void;
}>((set) => ({
  signUpPayload: { code: '', email: '', password: '' },
  isAuthLoading: false,
  showCode: false,
  error: null,
  setIsAuthLoading: (isAuthLoading: boolean) => set({ isAuthLoading }),
  setError: (error: string | null) => set({ error }),
  setShowCode: (showCode: boolean) => set({ showCode }),
  setSignUpPayload: (signUpPayload: ISignupInput) => set({ signUpPayload }),
}));
