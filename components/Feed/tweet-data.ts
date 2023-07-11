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
    displayName: "Damalo",
    id: 1,
    date: new Date("07-01-2023"),
    body: "First tweet, no media!",
    replies: 0,
    retweets: 0,
    likes: 0,
    views: 1,
  },
  {
    account: "junsupark",
    displayName: "Damalo",
    id: 2,
    date: new Date("07-02-2023"),
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F0muE2xWYAIPSgE?format=jpg&name=large",
      },
    ],
    replies: 1,
    retweets: 2,
    likes: 3,
    views: 4,
  },
  {
    account: "junsupark",
    displayName: "Damalo",
    id: 4,
    date: new Date("07-04-2023"),
    body: "Third tweet! Two medias!",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F0mVXF8WAAAota3?format=jpg&name=large",
      },
      {
        type: 'photo',
        src: 'https://pbs.twimg.com/media/F0oPPr9aMAABcsS?format=jpg&name=medium'
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
    body: "My body",
    medias: [{ type: "video", src: "jason meza.mp4" }],
    replies: 75,
    retweets: 123,
    likes: 8044,
    views: 600,
    retweeter: "junsupark",
  },
  {
    account: "junsupark",
    displayName: "Damalo",
    id: 6,
    date: new Date("02-16-2023"),
    body: "You look so good!",
    medias: [{ type: "video", src: "junsu.mp4" }],
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
    body: "My cats",
    medias: [
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F0mMgeDaYAAbD3-?format=jpg&name=large",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F0mMTZ-aYAAe8ev?format=jpg&name=large",
      },
      {
        type: "photo",
        src: "https://pbs.twimg.com/media/F0mMN1MacAIE6vt?format=jpg&name=large",
      },
    ],
    replies: 75,
    retweets: 123,
    likes: 8044,
    views: 600,
    retweeter: "junsupark",
  },
];

export default DUMMY_TWEETS;
