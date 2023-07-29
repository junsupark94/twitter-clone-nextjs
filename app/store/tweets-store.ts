import { create } from "zustand";
import DUMMY_TWEETS, { QUEUED_TWEETS } from "@/components/tweet-data";

export type Media = {
  type: "photo" | "video";
  src: string;
};

export type TweetType = {
  account: string;
  displayName: string;
  id: number | string;
  date: Date;
  replies: number;
  retweets: number;
  likes: number;
  views: number;
  retweeter?: string;
  replying?: number | string;
} & (
  | {
      body: string;
      medias?: Media[];
    }
  | {
      body?: string;
      medias: Media[];
    }
);

interface TweetsStore {
  tweets: TweetType[];
  queuedTweets: TweetType[];
  addTweet: (tweet: TweetType) => void;
  id: number;
  refreshTweets: () => void;
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useTweetsStore = create<TweetsStore>((set) => ({
  tweets: DUMMY_TWEETS,
  queuedTweets: QUEUED_TWEETS,
  id: 12,
  addTweet: (tweet: TweetType) =>
    set((state) => {
      return {
        tweets: [{ ...tweet, id: state.id }, ...state.tweets],
        id: state.id + 1,
      };
    }),
  refreshTweets: () =>
    set((state) => {
      return {
        tweets: [...state.queuedTweets, ...state.tweets],
        queuedTweets: [],
      };
    }),
  isVisible: false,
  openModal: () => set(() => ({ isVisible: true })),
  closeModal: () => set(() => ({ isVisible: false })),
}));

export default useTweetsStore;
