import { create } from "zustand";

interface DiscardModalStore {
  isVisible: boolean;
  openModal: (draft: any) => void;
  closeModal: () => void;
  setSourceModal: any;
  closeSourceModal: any;
  draft: any;
}

const useDiscardModalStore = create<DiscardModalStore>((set) => ({
  isVisible: false,
  openModal: (draft) => set({ isVisible: true, draft: draft }),
  closeModal: () => set({ isVisible: false }),
  closeSourceModal: null,
  setSourceModal: (closeModal : any) => set({closeSourceModal: closeModal}),
  draft: null,
}));

export default useDiscardModalStore;
