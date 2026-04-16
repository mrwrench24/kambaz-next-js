import axios from "axios";
import { Followup } from "../types/types";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const FOLLOWUPS_API = `${HTTP_SERVER}/api/pazza/followups`;

export const getFollowupsByIds = async (ids: string[]) => {
  const response = await axiosWithCredentials.post(`${FOLLOWUPS_API}/get`, ids);
  return response.data;
};

export const createFollowup = async (content: string, authorId: string) => {
  const response = await axiosWithCredentials.post(`${FOLLOWUPS_API}`, {
    content,
    authorId,
  });

  return response.data;
};

export const updateFollowup = async (followup: Followup) => {
  const response = await axiosWithCredentials.put(`${FOLLOWUPS_API}`, followup);
  return response.data;
};

export const deleteFollowup = async (fid: string) => {
  const response = await axiosWithCredentials.delete(`${FOLLOWUPS_API}/${fid}`);
  return response.data;
};
