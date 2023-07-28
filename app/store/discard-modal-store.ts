import { create } from "zustand";

interface DiscardModalStore {
  isModalVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  setSourceModal: any;
  closeSourceModal: any;
}

const useDiscardModalStore = create<DiscardModalStore>((set) => ({
  isModalVisible: false,
  openModal: () => set({ isModalVisible: true }),
  closeModal: () => set({ isModalVisible: false }),
  closeSourceModal: null,
  setSourceModal: (closeModal : any) => set({closeSourceModal: closeModal}),
}));

export default useDiscardModalStore;
