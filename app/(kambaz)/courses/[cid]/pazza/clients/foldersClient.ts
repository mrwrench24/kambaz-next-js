import axios from "axios";
import { Folder } from "../types/types";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const FOLDERS_API = `${HTTP_SERVER}/api/pazza/folders`;

export const getFoldersForCourse = async (cid: string) => {
  const response = await axiosWithCredentials.get(`${FOLDERS_API}/${cid}`);
  return response.data;
};

// returns the created folder (includes ID)
export const createFolder = async (cid: string, folderName: string) => {
  const response = await axiosWithCredentials.post(
    `${FOLDERS_API}/${cid}/${folderName}`,
  );
  return response.data;
};

// returns the folder as is
export const updateFolder = async (folder: Folder) => {
  const response = await axiosWithCredentials.put(`${FOLDERS_API}`, folder);
  return response.data;
};

// returns the same FIDs
export const deleteFolders = async (fids: string[]) => {
  const response = await axiosWithCredentials.delete(FOLDERS_API, {
    data: fids,
  });
  return response.data;
};
