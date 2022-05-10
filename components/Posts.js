import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "@firebase/firestore";
import  {db}  from "../firebase";
import Post from "./Post";

export default function Posts({ postsList }) {
  const postCollections = collection(db, "posts");
  const [posts] = useCollection(postCollections);


  return (
    <div>
      { posts?.docs.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timeStamp={post.data().timeStamp}
                image={post.data().image}
                postImage={post.data().postImage}
              />
            );
          })}
        
    </div>
  );
}