import { create } from "zustand";

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

const DUMMY_TWEETS: TweetType[] = [
  {
    account: "junsupark",
    displayName: "J-money",
    id: 1,
    date: new Date("07-01-2023"),
    body: "Welcome to Junsu Park's fake Twitter clone! I did this project to deepen my frontend skills and learn new tech stacks such as Next.js, Typescript, Tailwind! I also learned about server-side rendering and server components.",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 1,
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 2,
    date: new Date("07-02-2023"),
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1XXnfaaEAAMO1C?format=jpg&name=900x900",
      },
    ],
    replies: 1,
    retweets: 2,
    likes: 3,
    views: 4,
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 4,
    date: new Date("07-04-2023"),
    body: "Next.js was lovely to use since it took away all the pain of configuring all the tools together. Its opinionated approach is helpful for relatively new developers like me. I also really enjoyed using Zustand for global state management. The modals that pop up are rendered via changing their visibility status and passing any relevant information along.",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1Q8HY-XwAYATsY?format=jpg&name=small",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1Q8HY-XsAYqdx5?format=jpg&name=small",
      },
    ],
    replies: 10,
    retweets: 2,
    likes: 100,
    views: 600,
  },
  {
    account: "notJunsuPark",
    displayName: "J-rizzle",
    id: 3,
    date: new Date("02-15-2023"),
    body: "I was surprised by Twitter makes everything divs and flexboxes and adds accesbility with ARIA. Then doing this project made me hate the inconsitent behavior of HTML elements and that making them all block or flexitems makes everything so much easier.",
    medias: [{ type: "video", src: "kitty.mp4" }],
    replies: 75,
    retweets: 123,
    likes: 8044,
    views: 600,
    retweeter: "junsupark",
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 6,
    date: new Date("02-16-2023"),
    body: "I thought this project would take me a week but it tooks me 3 weeks. Components I thought would be simple to implement took lots of trial and error switching styles back and forth to understand how width and height changes based on display, position, flex grow, containing block, and stacking context.",
    medias: [
      { type: "video", src: "heart.mp4" },
      { type: "video", src: "heart.mp4" },
    ],
    replies: 0,
    retweets: 0,
    likes: 2,
    views: 5,
    replying: "nextjs",
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 5,
    date: new Date("03-15-2023"),
    body: "I absolute loved using Tailwind! I hated doing CSS but this streamlined the process so much as well as give me a design system. I can't wait for the next big update! I watched the Tailwind Connect and Oxide and has selector looks amazing!",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1U4xumaYAM5FXq?format=jpg&name=medium",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1Y3bjcXoAA2RFw?format=jpg&name=large",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1ARJC8WcAUvDaK?format=jpg&name=medium",
      },
    ],
    replies: 75,
    retweets: 123,
    likes: 8044,
    views: 600,
    replying: "tailwindcss",
    retweeter: "adamwathan",
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 7,
    date: new Date("07-20-2023"),
    body: "Twitter can embed up to 4 photos or videos in a tweet. Clicking on them will open a new modal to showcase the media in full screen. The way the media is displayed changes based on the number. See how the media divisions changes depending on how many media is included?",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1Ae67NXsAEBcnH?format=jpg&name=medium",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1OJ_l0WAAQ7XoE?format=jpg&name=large",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/Fzd4PWjXsAAyFGk?format=jpg&name=medium",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F0Y62LhWwAEYetY?format=jpg&name=medium",
      },
    ],
    replies: 10324,
    retweets: 55903,
    likes: 34935,
    views: 930532,
  },
];

const QUEUED_TWEETS: TweetType[] = [
  {
    account: "junsupark",
    displayName: "J-money",
    id: 8,
    date: new Date(),
    body: "Copy needed",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 9,
    date: new Date(),
    body: "Copy needed",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 10,
    date: new Date(),
    body: "Copy needed",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
  {
    account: "junsupark",
    displayName: "J-money",
    id: 11,
    date: new Date(),
    body: "Copy needed",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
];

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
