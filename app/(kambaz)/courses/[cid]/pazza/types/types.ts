/** Folders */
export type Folder = {
  id: string;
  name: string;
};

/** Posts */
export type Answer = {
  content: string;
  // date string
  updatedAt: string;
  // user IDs
  contributors: string[];
  commenders: string[];
};

export type NewPost = {
  postType: "question" | "note";
  postTo: "all" | "individual";
  authorId: string;
  folders: string[];
  // (title)
  summary: string;
  // (content)
  details: string;
};

export type PostSection = {
  id: string;
  title: string;
  posts: Post[];
};

export type Post = {
  id: string;
  postNumber: number;
  title: string;
  content: string;
  postType: "question" | "note";
  // TODO: name or the uid? probably uid
  author: string;
  // ids of users who have commended the post
  commenders: string[];
  // null if visible to all
  onlyVisibleTo: string[] | null;
  // folder IDs
  folders: string[];
  studentAnswer: Answer | null;
  instructorAnswer: Answer | null;
  followups: string[];

  createdAt: string;
  updatedAt: string;
  viewers: string[];
};

/** Followups */
export type FollowupReply = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
};

export type Followup = {
  id: string;
  resolved: boolean;
  author: string;
  content: string;
  createdAt: string;
  // IDs of followup replies
  replies: string[];
};
