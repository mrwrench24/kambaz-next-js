"use client";
import NewPostScreen from "./NewPostScreen";
import PostScreen from "./PostScreen";
import CAGScreen from "./CAGScreen";
import ManageClassScreen from "./ManageClassScreen";
import { usePazzaContext } from "./PazzaContext";

export default function PazzaPage() {
  const { page } = usePazzaContext();

  return (
    <div>
      {page === "new_post" && <NewPostScreen />}
      {page === "post" && <PostScreen />}
      {page === "cag" && <CAGScreen />}
      {page === "manage_class" && <ManageClassScreen />}
    </div>
  );
}
