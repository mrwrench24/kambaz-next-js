"use client";
import NewPostScreen from "./NewPostScreen";
import PostScreen from "./PostScreen";
import CAGScreen from "./CAGScreen";
import ManageClassScreen from "./ManageClassScreen";
import { usePazzaContext } from "./PazzaContext";
import { Post } from "./types/types";

export default function PazzaPage() {
  const { page } = usePazzaContext();

  return (
    <div>
      {page === "new_post" && <NewPostScreen />}
      {typeof page === "object" && page !== null && (
        <PostScreen post={page as Post} />
      )}
      {page === "cag" && <CAGScreen />}
      {page === "manage_class" && <ManageClassScreen />}
    </div>
  );
}
