import {create} from 'zustand'

interface QuoteTweetState {
  isVisible: boolean;
  openModal: any;
  closeModal: any;
  data: any;
  setData: (data : any) => void;
}

const useQuoteTweetStore = create<QuoteTweetState>((set) => ({
  isVisible: false,
  openModal: () => set({isVisible: true}),
  closeModal: () => set({isVisible: false}),
  data: {},
  setData: (data : any) => set({data: data})
}))

export default useQuoteTweetStore;