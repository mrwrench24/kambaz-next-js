import axios from "axios";
import { FollowupReply } from "../types/types";
import { FOLDERS_API } from "./foldersClient";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const REPLIES_API = `${HTTP_SERVER}/api/pazza/replies`;

export const getRepliesByIds = async (ids: string[]) => {
  const response = await axiosWithCredentials.get(`${REPLIES_API}`, {
    data: ids,
  });

  return response.data;
};

export const createReply = async (cid: string, authorId: string) => {
  const response = await axiosWithCredentials.post(`${FOLDERS_API}`, {
    cid,
    authorId,
  });

  return response.data;
};

export const updateReply = async (reply: FollowupReply) => {
  const response = await axiosWithCredentials.put(`${FOLDERS_API}`, reply);
  return response.data;
};

export const deleteReply = async (rid: string) => {
  const response = await axiosWithCredentials.delete(`${FOLDERS_API}`, {
    data: rid,
  });

  return response.data;
};
