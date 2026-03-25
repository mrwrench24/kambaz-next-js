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

export const deleteAssignment = async (aid: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${aid}`,
  );
  return data;
};

export const createAssignmentForCourse = async (
  courseId: string,
  assignment: any,
) => {
  const response = await axiosWithCredentials.post(
    `${ASSIGNMENTS_API}/${courseId}`,
    assignment,
  );

  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment,
  );

  return data;
};
