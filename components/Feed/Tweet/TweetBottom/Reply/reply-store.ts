import {create} from 'zustand'

interface ReplyStore {
  isVisible: boolean;
  openModal: any;
  closeModal: any;
  data: any;
  setData: (data : any) => void;
}

const useReplyStore = create<ReplyStore>((set) => ({
  isVisible: false,
  openModal: () => set({isVisible: true}),
  closeModal: () => set({isVisible: false}),
  data: {},
  setData: (data : any) => set({data: data})
}))

export default useReplyStore;