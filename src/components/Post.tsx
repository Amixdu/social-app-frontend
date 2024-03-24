/* eslint-disable @next/next/no-img-element */
import IconButton from "./IconButton";
import likeIcon from "../../public/like.svg";
import likeFilledIcon from "../../public/like-filled.svg";
import commentIcon from "../../public/comment.svg";
import shareIcon from "../../public/share.svg";

interface PostProps {
  content: string;
}
const Post = ({ content }: PostProps) => {
  return (
    <div className="bg-gray-800 rounded-md p-6 my-4 mx-auto max-w-2xl">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src="https://placekitten.com/40/40"
          alt="User Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="text-white font-bold">John Doe</p>
          <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-white text-lg mb-4">
        {content}
      </p>

      {/* Post Actions */}
      <div className="flex items-center space-x-4">
        <IconButton icon={likeIcon} />
        <IconButton icon={commentIcon} />
        <IconButton icon={shareIcon} />
      </div>
    </div>
  );
};

export default Post;
