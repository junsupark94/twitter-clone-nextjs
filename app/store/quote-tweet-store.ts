import {create} from 'zustand'
import { Media } from './tweets-store';

interface QuoteTweetState {
  isVisible: boolean;
  openModal: any;
  closeModal: any;
  data: {
    account: string;
    date: Date;
    displayName: string;
    body?: string;
    medias?: Media[];
    retweeter?: string;
    replying?: string | number;
  } | null;
  setData: (data : any) => void;
}

const useQuoteTweetStore = create<QuoteTweetState>((set) => ({
  isVisible: false,
  openModal: () => set({isVisible: true}),
  closeModal: () => set({isVisible: false}),
  data: null,
  setData: (data : any) => set({data: data})
}))

export default useQuoteTweetStore;