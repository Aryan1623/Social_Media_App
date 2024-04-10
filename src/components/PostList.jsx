import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcomemessage from "./welcomemessage";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      { postList.length === 0 && <Welcomemessage/>}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;