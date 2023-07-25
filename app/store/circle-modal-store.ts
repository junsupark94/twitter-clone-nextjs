import { create } from "zustand";

interface CircleModalStore {
  isVisible: boolean;
  openModal: any;
  closeModal: any;
}

const useCircleModal = create<CircleModalStore>((set) => ({
  isVisible: false,
  openModal: () => set({ isVisible: true }),
  closeModal: () => set({ isVisible: false }),
}));

export default useCircleModal;
