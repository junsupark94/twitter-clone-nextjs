import { create } from "zustand";
import { Draft } from "./drafts-modal-store";

interface DiscardModalStore {
  isVisible: boolean;
  openModal: (draft: Draft) => void;
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
