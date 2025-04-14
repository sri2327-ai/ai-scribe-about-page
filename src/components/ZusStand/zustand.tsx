// store/demoStore.ts
import { create } from "zustand";

interface DemoState {
  selectedDateTime: string;
  setSelectedDateTime: (value: string) => void;
}

export const useDemoStore = create<DemoState>((set) => ({
  selectedDateTime: "",
  setSelectedDateTime: (value) => set({ selectedDateTime: value }),
}));


type ModalState = {
    open: boolean;
    setOpen: (value: boolean) => void;
  };
  
  export const useModalStore = create<ModalState>((set) => ({
    open: false,
    setOpen: (value) => set({ open: value }),
  }));