"use client";
import { useParams } from "next/navigation";
import PeopleTable from "./PeopleTable";
import { findUsersForCourse } from "../../../client";
import { useEffect, useState } from "react";

export default function PeoplePage() {
  const { cid } = useParams();

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const newUsers = await findUsersForCourse(cid as string);
    setUsers(newUsers);
  }

  useEffect(() => {
    if (!cid) return;

    fetchUsers();
  }, [cid]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
