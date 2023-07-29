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
    displayName: "Junsu Park",
    id: 1,
    date: new Date("07-01-2023"),
    body: "Welcome to my fake Twitter clone! I was bored of the very basic Twitter clone projects on Youtube. I wanted to create a high fidelity copy of Twitter's UI to develop my frontend skills and this project really challenged me.",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 1,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 0,
    date: new Date("07-02-2023"),
    body: `I was able to appreciate subtle responsive designs Twitter has such as short transition on changing background color on hover. Text popups. Pressing ESC to close Modals. \nThings that are interactable will have pointer cursor when you hover over it. Feel free to click around and even compose a Tweet!`,
    replies: 4,
    retweets: 1,
    likes: 6,
    views: 12,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 2,
    date: new Date("07-02-2023"),
    replying: "tailwindcss",
    retweeter: "adamwathan",
    body: "I used to hate doing CSS but Tailwind CSS streamlined the process so much! No more switching back and forth React and CSS files or creating class names. I watched the Tailwind Connect and I'm excited for the new update!",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F1XXnfaaEAAMO1C?format=jpg&name=900x900",
      },
    ],
    replies: 2,
    retweets: 1,
    likes: 3,
    views: 10,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 4,
    date: new Date("07-04-2023"),
    replying: "nextjs",
    body: "Next.js took away all the pain of configuring all the tools together. Opinionated frameworks are also great for learning new technologies and best practices. There's still lot of things I need to learn about Next.js.",
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
    account: "junsupark",
    displayName: "Junsu Park",
    id: 3,
    date: new Date("02-15-2023"),
    body: "I also really enjoyed using Zustand for global state management. Very intuitive, much easier to use than Redux. The modals that pop up are rendered via changing their visibility status and passing any relevant information along.",
    medias: [{ type: "video", src: "kitty.mp4" }],
    replies: 75,
    retweets: 123,
    likes: 8044,
    views: 600,
    retweeter: "junsupark",
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 6,
    date: new Date("02-16-2023"),
    body: "I was surprised by Twitter makes everything divs and flexboxes and adds accesbility with ARIA. Then doing this project made me hate the inconsitent styling of HTML elements and that making them all block or flex items makes everything so much easier.",
    medias: [
      { type: "video", src: "heart.mp4" },
      { type: "video", src: "heart.mp4" },
  ],
    replies: 0,
    retweets: 0,
    likes: 2,
    views: 5,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 5,
    date: new Date("03-15-2023"),
    body: "",
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
  },
  {
    account: 'junsupark',
    displayName: 'Junsu Park',
    id: 7,
    date: new Date("07-20-2023"),
    body: "Twitter can embed up to 4 photos or videos in a tweet. Clicking on them will open a new modal to showcase the media in full screen. The way the media is displayed changes based on the number. See how the media divisions changes depending on how many media is included?",
    medias: [
      {type: 'photo', src: 'https://pbs.twimg.com/media/F1Ae67NXsAEBcnH?format=jpg&name=medium'},
      {type: 'photo', src: 'https://pbs.twimg.com/media/F1OJ_l0WAAQ7XoE?format=jpg&name=large'},
      {type: 'photo', src: 'https://pbs.twimg.com/media/Fzd4PWjXsAAyFGk?format=jpg&name=medium'},
      {type: 'photo', src: 'https://pbs.twimg.com/media/F0Y62LhWwAEYetY?format=jpg&name=medium'},
    ],
    replies: 10324,
    retweets: 55903,
    likes: 34935,
    views: 930532,
  }
];

export const QUEUED_TWEETS: TweetType[] = [
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 8,
    date: new Date(),
    body: "Components I thought would be simple to implement took lots of trial and error to understand how width and height changes based on display, position, padding, margin (negative too) flex grow, containing block, and stacking context.",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 9,
    date: new Date(),
    body: "I'm proud of the scrolling behavior with the right side bar. See how the Verified box doesn't scroll? I couldn't figure out Twitter's implementation so I came up with my own!",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 10,
    date: new Date(),
    body: "TypeScript was a blast to use too. It's bit more overhead but it makes development significantly less error-prone, which is great for big teams. Even solo it helped me a lot since it reduced lot of cognitive load I had to take on to remember what props and types I needed.",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
  {
    account: "junsupark",
    displayName: "Junsu Park",
    id: 11,
    date: new Date(),
    body: "I had to cut off adding more features because it wouldn't teach me anything new and I wanted to move on to trying out different frameworks such as Remix, SvelteKit, and SolidStart. \n\nFollow my frontend journey by following me on LinkedIn! Click on my picture for my profile!",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 0,
  },
];

export default DUMMY_TWEETS;
