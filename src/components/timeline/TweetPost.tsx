import { CgProfile } from "react-icons/cg";
import { HiBadgeCheck } from "react-icons/hi";
import { FiMessageSquare, FiRepeat } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { MdOutlinePublish } from "react-icons/md";
import "./TweetPost.css";

type Props = {
  username: string;
  twitterId: string;
  profileImage: string;
  postsImage: string;
  text: string;
  verified: boolean;
};

export const TweetPost = ({
  username,
  twitterId,
  profileImage,
  postsImage,
  text,
  verified,
}: Props): JSX.Element => {
  return (
    <div className="tweetPost">
      <div className="tweetPost-avatar">
        <CgProfile className="text-gray-400 mt-5 ml-5" size={25} />
      </div>
      <div className="tweetPost-body">
        <div className="tweetPost-header">
          <div className="flex text-sm font-black mt-1">
            <p>{username}</p>
            <span>
              <HiBadgeCheck size={20} className="twitter-color" />
            </span>
            <span className="text-gray-400 font-black">@{twitterId}</span>
          </div>

          <div className="tweetPost-contents my-5">
            <div>{text}</div>
          </div>
          <img src={postsImage} />
          <div className="tweetPost-footer">
            <FiMessageSquare />
            <FiRepeat />
            <BsHeart />
            <MdOutlinePublish size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
