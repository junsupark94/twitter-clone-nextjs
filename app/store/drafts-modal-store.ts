import { create } from "zustand";
import { Media } from "./tweets-store";

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

interface DraftBasic {
  body: string;
  id: string;
}
interface QuoteTweetDraft extends DraftBasic {
  replying?: never;
  quoteTweetUrl: string;
  quoteTweetbody?: string;
  quoteTweetMedia?: Media[];
}
interface ReplyDraft extends DraftBasic {
  quoteTweetUrl?: never;
  replying: string;
  replyBody?: string;
  replyMedia?: string;
}
type Draft = XOR<DraftBasic, XOR<QuoteTweetDraft, ReplyDraft>>;


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
  setSourceModal: (closeModal: any) => set({ closeSourceModal: closeModal }),
  drafts: [
    {
      body: "Test draft",
      replying: "junsupark",
      id: "d1",
      replyBody: "Reply body",
    },
    {
      body: "Test draft 2",
      id: "d2",
      quoteTweetbody: "Quote Tweet Body",
      quoteTweetUrl: "https://twitter.com/username/status/tweetid",
    },
    { body: "Test", id: "d3" },
  ],
}));

export default useDraftsModalStore;
