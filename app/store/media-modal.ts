import { create } from "zustand";
import { TweetType } from "./tweets-store";

interface MediaModalStore {
  isVisible: boolean;
  openModal: (tweet: TweetType) => void;
  closeModal: () => void;
  tweet: any;
  selected: number;
}

const useMediaModalStore = create<MediaModalStore>((set) => ({
  isVisible: false,
  openModal: (tweet) => set({ isVisible: true, tweet: tweet}),
  closeModal: () => set({ isVisible: false, tweet: undefined }),
  tweet: {},
  selected: 0,
}));

export default useMediaModalStore;
