// auth-store.ts
import { createStore } from "zustand/vanilla";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User
} from "firebase/auth";

import { auth } from "@/lib/firebase"; // presupunând că ai un fișier firebase.ts care exportă `auth`

export type AuthState = {
  user: User | null;
  isAdmin: boolean;
};

export type AuthActions = {
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

// Stare implicită, fără utilizator autentificat
export const defaultAuthState: AuthState = {
  user: null,
  isAdmin: false
};

export const createAuthStore = (initState: AuthState = defaultAuthState) => {
  return createStore<AuthStore>()(set => ({
    ...initState,
    // Funcție pentru autentificare
    login: async () => {
      try {
        await signOut(auth);

        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        set({ user }); // Stocăm utilizatorul autentificat în store
        if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
          set({ isAdmin: true });
        }
      } catch (error) {
        console.warn("Autentificarea a fost anulată de utilizator.", error);
      }
    },
    // Funcție pentru deconectare
    logout: async () => {
      try {
        await signOut(auth);
        set({ user: null }); // Resetează utilizatorul la null după deconectare
        set({ isAdmin: false });
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  }));
};
