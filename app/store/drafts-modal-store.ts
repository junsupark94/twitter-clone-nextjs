import { create } from "zustand";

type Draft = {
  body: string;
  replying?: string,
  id: string;
}

interface DraftsModalStore {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  setSourceModal: any;
  closeSourceModal: any;
  drafts: Draft[];
}

const useDraftsModalStore = create<DraftsModalStore>((set) => ({
  isVisible: false,
  openModal: () => set({ isVisible: true }),
  closeModal: () => set({ isVisible: false }),
  closeSourceModal: null,
  setSourceModal: (closeModal : any) => set({closeSourceModal: closeModal}),
  drafts: [
    {body: "Test draft", replying: "junsupark", id: "d1"},
    {body: "Test draft 2", id: "d2"},
  ],
}));

export default useDraftsModalStore;
