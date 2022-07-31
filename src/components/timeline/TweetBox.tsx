import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@mantine/core";
import { CgProfile } from "react-icons/cg";
import { db } from "../../../firebase";
import "./TweetBox.css";

type Tweet = {
  tweetMessage: string;
  tweetImage: string;
};

export const TweetBox = (): JSX.Element => {
  const [tweetContents, setTweetContents] = useState<Tweet>({
    tweetMessage: "",
    tweetImage: "",
  });

  const handleMessageChange = (
    e: React.FormEvent<HTMLInputElement> | any
  ): void => {
    setTweetContents({ ...tweetContents, tweetMessage: e.target.value });
  };

  const handleImageChange = (
    e: React.FormEvent<HTMLInputElement> | any
  ): void => {
    setTweetContents({ ...tweetContents, tweetImage: e.target.value });
  };

  const sendTweet = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault();
    if (
      !(tweetContents.tweetImage === "") ||
      !(tweetContents.tweetMessage === "")
    ) {
      addDoc(collection(db, "posts"), {
        username: "tmp725",
        twitterId: "test_user123",
        profileImage: "",
        // postsImage: "https://source.unsplash.com/random",
        postsImage: tweetContents.tweetImage,
        text: tweetContents.tweetMessage,
        verified: true,
        timestamp: serverTimestamp(),
      });
      setTweetContents({ ...tweetContents, tweetMessage: "", tweetImage: "" });
    } else {
      return;
    }
  };

  return (
    <div className="tweetBox">
      <form className="flex flex-col">
        <div className="tweetBox-input">
          <CgProfile className="text-gray-400" size={25} />
          <input
            placeholder="いまどうしてる？"
            type="text"
            value={tweetContents.tweetMessage}
            onChange={handleMessageChange}
          ></input>
        </div>
        <input
          className="tweetBox-postImage"
          placeholder="画像のURLを入力してください"
          type="text"
          value={tweetContents.tweetImage}
          onChange={handleImageChange}
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="mt-5"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          styles={(theme) => ({
            root: {
              backgroundColor: "#00acee",
              width: 124,
              marginLeft: "auto",
              marginRight: 10,
              border: 0,
              borderRadius: 30,
              height: 32,
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 10,
              "&:hover": {
                backgroundColor: theme.fn.darken("#00acee", 0.05),
              },
            },
            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};
