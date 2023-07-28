import { create } from "zustand";

interface DiscardModalStore {
  isModalVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useDiscardModalStore = create<DiscardModalStore>((set) => ({
  isModalVisible: false,
  openModal: () => set({ isModalVisible: true }),
  closeModal: () => set({ isModalVisible: false }),
}));

export default useDiscardModalStore;
