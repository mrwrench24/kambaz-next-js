import axios from "axios";
import { NewPost, Post } from "../types/types";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const POSTS_API = `${HTTP_SERVER}/api/pazza/posts`;

export const getPostsForCourse = async (cid: string) => {
  const response = await axiosWithCredentials.get(`${POSTS_API}/${cid}`);

  console.log(response.data);
  return response.data;
};

export const createPost = async (cid: string, newPost: NewPost) => {
  const response = await axiosWithCredentials.post(
    `${POSTS_API}/${cid}`,
    newPost,
  );

  return response.data;
};

export const updatePost = async (post: Post) => {
  const response = await axiosWithCredentials.put(`${POSTS_API}`, post);
  return response.data;
};

export const deletePost = async (pid: string) => {
  const response = await axiosWithCredentials.delete(`${POSTS_API}/${pid}`);
  return response.data;
};

export const addFollowupIdToPost = async (pid: string, fid: string) => {
  await axiosWithCredentials.put(`${POSTS_API}/${pid}/${fid}`);
};
