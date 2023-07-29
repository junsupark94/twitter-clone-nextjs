import { create } from "zustand";

interface DiscardModalStore {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  setSourceModal: any;
  closeSourceModal: any;
}

const useDiscardModalStore = create<DiscardModalStore>((set) => ({
  isVisible: false,
  openModal: () => set({ isVisible: true }),
  closeModal: () => set({ isVisible: false }),
  closeSourceModal: null,
  setSourceModal: (closeModal : any) => set({closeSourceModal: closeModal}),
}));

export default useDiscardModalStore;
