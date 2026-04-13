import { create } from 'zustand';
import { InstagramAccount } from '../types';

interface AccountState {
  accounts: InstagramAccount[];
  primaryAccount: InstagramAccount | null;
  setAccounts: (accounts: InstagramAccount[]) => void;
  setPrimaryAccount: (accountId: string) => void;
  addAccount: (account: InstagramAccount) => void;
  removeAccount: (accountId: string) => void;
}

export const useAccountStore = create<AccountState>((set, get) => ({
  accounts: [],
  primaryAccount: null,
  setAccounts: (accounts) => {
    const primary = accounts.find(a => a.isPrimary) || null;
    set({ accounts, primaryAccount: primary });
  },
  setPrimaryAccount: (accountId) => {
    const accounts = get().accounts.map(acc => ({
      ...acc,
      isPrimary: acc.id === accountId
    }));
    const primary = accounts.find(a => a.isPrimary) || null;
    set({ accounts, primaryAccount: primary });
  },
  addAccount: (account) => {
    set({ accounts: [...get().accounts, account] });
  },
  removeAccount: (accountId) => {
    set({ accounts: get().accounts.filter(a => a.id !== accountId) });
  },
}));
