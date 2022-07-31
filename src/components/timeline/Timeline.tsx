import { useEffect, useState } from "react";
import {
  collection,
  CollectionReference,
  DocumentData,
  onSnapshot,
  orderBy,
  Query,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import { db } from "../../../firebase";
import { TweetBox } from "./TweetBox";
import { TweetPost } from "./TweetPost";
import "./Timeline.css";

export const Timeline = (): JSX.Element => {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect((): void => {
    const postsData: CollectionReference<DocumentData> = collection(
      db,
      "posts"
    );
    const sortPostsData: Query<DocumentData> = query(
      postsData,
      orderBy("timestamp", "desc")
    );
    onSnapshot(sortPostsData, (snapshot: QuerySnapshot<DocumentData>): void => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline border-right">
      <div className="timeline-header z-10">
        <h3>ホーム</h3>
      </div>
      <TweetBox />
      {posts.map((postContents: DocumentData, i: number) => (
        <TweetPost
          key={i}
          username={postContents.username}
          twitterId={postContents.twitterId}
          profileImage={postContents.profileImage}
          postsImage={postContents.postsImage}
          text={postContents.text}
          verified={postContents.verified}
        />
      ))}
    </div>
  );
};
