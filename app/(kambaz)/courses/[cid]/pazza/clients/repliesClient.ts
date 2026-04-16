import axios from "axios";
import { FollowupReply } from "../types/types";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const REPLIES_API = `${HTTP_SERVER}/api/pazza/replies`;

export const getReplyByIds = async (ids: string[]) => {
  const response = await axiosWithCredentials.post(`${REPLIES_API}/get`, ids);
  return response.data;
};

export const createReply = async (cid: string, authorId: string) => {
  const response = await axiosWithCredentials.post(`${REPLIES_API}`, {
    cid,
    authorId,
  });

  return response.data;
};

export const updateReply = async (reply: FollowupReply) => {
  const response = await axiosWithCredentials.put(`${REPLIES_API}`, reply);
  return response.data;
};

export const deleteReply = async (rid: string) => {
  const response = await axiosWithCredentials.delete(`${REPLIES_API}/${rid}`);
  return response.data;
};
