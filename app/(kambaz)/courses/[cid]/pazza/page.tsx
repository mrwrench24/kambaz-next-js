"use client";
import NewPostScreen from "./NewPostScreen";
import PostScreen from "./PostScreen";
import CAGScreen from "./CAGScreen";
import ManageClassScreen from "./ManageClassScreen";
import { usePazzaContext } from "./PazzaContext";
import { Post } from "./types/types";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { getFoldersForCourse } from "./clients/foldersClient";
import { setFolders } from "./reducers/folderReducer";
import { useDispatch } from "react-redux";

export default function PazzaPage() {
  const { page } = usePazzaContext();
  const { cid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cid) return;

    getFoldersForCourse(cid as string).then((folders) => {
      dispatch(setFolders(folders));
    });
  }, [cid]);

  return (
    <div>
      {page === "new_post" && <NewPostScreen />}
      {typeof page === "object" && page !== null && (
        <PostScreen postId={(page as Post).id} />
      )}
      {page === "cag" && <CAGScreen />}
      {page === "manage_class" && <ManageClassScreen />}
    </div>
  );
}
