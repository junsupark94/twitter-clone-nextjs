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
    body: "Welcome to Junsu Park's fake Twitter clone! I did this project to deepen my frontend skills and learn new tech stacks such as Next.js, Typescript, Tailwind! I also learned about server-side rendering and server components",
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
    body: "I also really enjoyed using Zustand for global state management. The modals that pop up are rendered via changing their visibility status and passing any relevant information along.",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1Q8HY-XwAYATsY?format=jpg&name=small",
      },
      {
        type: 'photo',
        src: 'https://pbs.twimg.com/media/F1Q8HY-XsAYqdx5?format=jpg&name=small'
      }
    ],
    replies: 10,
    retweets: 2,
    likes: 100,
    views: 600,
  },
  {
    account: "jasonmeza",
    displayName: "hehJason",
    id: 3,
    date: new Date("02-15-2023"),
    body: "Twitter can embed up to 4 photos or videos in a tweet. Clicking on them will open a new modal to showcase the media in full screen.",
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
    body: "The way the media is displayed changes based on the number.",
    medias: [
      { type: "video", src: "heart.mp4" },
      { type: "video", src: "heart.mp4" },
  ],
    replies: 0,
    retweets: 0,
    likes: 2,
    views: 5,
    replying: "jasonmeza",
  },
  {
    account: "jasonmeza",
    displayName: "hehJason",
    id: 5,
    date: new Date("03-15-2023"),
    body: "My cows",
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
    retweeter: "junsupark",
  },
  {
    account: 'junsupark',
    displayName: 'J-money',
    id: 7,
    date: new Date("07-20-2023"),
    body: "See how the media divisions changes depending on how many media is included?",
    medias: [
      {type: 'photo', src: 'https://pbs.twimg.com/media/F1Ae67NXsAEBcnH?format=jpg&name=medium'},
      {type: 'photo', src: 'https://pbs.twimg.com/media/F1OJ_l0WAAQ7XoE?format=jpg&name=large'},
      {type: 'photo', src: 'https://pbs.twimg.com/media/Fzd4PWjXsAAyFGk?format=jpg&name=medium'},
      {type: 'photo', src: 'https://pbs.twimg.com/media/F0Y62LhWwAEYetY?format=jpg&name=medium'},
    ],
    replies: 10324,
    retweets: 55903,
    likes: 3494535,
    views: 93055532,
  }
];

export default DUMMY_TWEETS;
