import { Post } from "../types/types";

const posts: Post[] = [
  {
    id: "p1",
    postNumber: 57,
    title: "Test Note 1",
    content:
      "Hey, this is a Note that I am testing in the app for now. Hey, this is a Note that I am testing in the app for now. Hey, this is a Note that I am testing in the app for now. Hey, this is a Note that I am testing in the app for now. Hey, this is a Note that I am testing in the app for now. Hey, this is a Note that I am testing in the app for now.",
    postType: "note",
    author: "234",
    commenders: ["u2"],
    folders: ["1", "2"],
    studentAnswer: null,
    instructorAnswer: null,
    followups: [
      {
        id: "f1",
        resolved: true,
        author: "Ada Lovelace",
        content: "Any updates on this?",
        replies: [],
      },
      {
        id: "f2",
        resolved: false,
        author: "Ada Lovelace",
        content: "Again, updates on this?",
        replies: [
          {
            id: "fr1",
            author: "234",
            content: "Yes, I am also curious!",
          },
        ],
      },
    ],
  },
  {
    id: "p2",
    postNumber: 56,
    title: "Test Post 2",
    content: "Hey, this is a post #2 that I am testing in the app for now.",
    postType: "question",
    author: "777",
    commenders: ["u2", "u3", "u4"],
    folders: ["2", "3"],
    studentAnswer: null,
    instructorAnswer: {
      content: "This is an instructor answer.",
      contributors: ["u3"],
      commenders: ["u2"],
    },
    followups: [],
  },
  {
    id: "p3",
    postNumber: 55,
    title: "Test Post 3",
    content: "Hey, this is a post #3 that I am testing in the app for now.",
    postType: "question",
    author: "Eric Cartman",
    commenders: ["u2"],
    folders: ["1"],
    studentAnswer: {
      content: "This is a student answer.",
      contributors: ["u2"],
      commenders: ["u1"],
    },
    instructorAnswer: null,
    followups: [],
  },
];

export default posts;
