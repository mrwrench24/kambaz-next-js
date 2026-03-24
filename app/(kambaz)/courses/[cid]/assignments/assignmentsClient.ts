import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchCourseAssignments = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${courseId}`,
  );
  return data;
};
