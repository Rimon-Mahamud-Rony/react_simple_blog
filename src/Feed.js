import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
 // console.log(posts);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col gap-y-2">
          <div className="p-4 w-full">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden my-4"
              >
                <Post post={ post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
