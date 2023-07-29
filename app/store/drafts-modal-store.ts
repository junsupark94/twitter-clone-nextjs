import { create } from "zustand";
import { Media } from "./tweets-store";

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

interface DraftBasic {
  body: string;
  id: number;
}
interface QuoteTweetDraft extends DraftBasic {
  quoteTweetUrl: string;
  date: Date;
  quoteTweetbody?: string;
  quoteTweetMedia?: Media[];
}
interface ReplyDraft extends DraftBasic {
  replying: string;
  date: Date;
  replyBody?: string;
  replyMedia?: string;
}
export type Draft = XOR<DraftBasic, XOR<QuoteTweetDraft, ReplyDraft>>;

interface DraftsModalStore {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  setSourceModal: any;
  closeSourceModal: any;
  drafts: Draft[];
  deleteDrafts: (ids: number[]) => void;
  saveDraft: (draft: Draft) => void;
  id: number;
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
      id: 1,
      replyBody: "Reply body",
      date: new Date("07-28-2023")
    },
    {
      body: "Test draft 2",
      id: 2,
      quoteTweetbody: "Quote Tweet Body",
      quoteTweetUrl: "https://twitter.com/username/status/tweetid",
      date: new Date("07-29-2023")
    },
    { body: "Test", id: 3 },
  ],
  deleteDrafts: (ids) =>
    set((state) => {
      const filteredDrafts = state.drafts.filter(
        (draft) => !ids.includes(draft.id),
      );
      return { drafts: filteredDrafts };
    }),
  saveDraft: (draft) =>
    set((state) => ({
      drafts: [...state.drafts, { ...draft, id: state.id }],
      id: state.id + 1,
    })),
  id: 4,
}));

export default useDraftsModalStore;
