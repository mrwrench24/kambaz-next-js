import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const postEnrollment = async (cid: string) => {
  const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${cid}`);
  return data;
};

export const deleteEnrollment = async (eid: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${eid}`,
  );

  return data;
};

export const findEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}`);

  return data;
};
