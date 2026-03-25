import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState } from "react";

const PostPage = ({ posts, handleDelete }) => {
  // const params = useParams(); get parameter from url
  // const id = params.id;
  //URL থেকে পাওয়া id সবসময় string হয়

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() == id);

  const [showDelete, setShowDelete] = useState(false);
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col gap-y-2">
          <div className="p-4 w-full">
            {post && (
              <>
                <h2 className="text-2xl py-2 font-bold text-center mb-2">
                  {post.title}
                </h2>
                <p>{post.body}</p>

                <div className="w-full flex flex-row justify-end">
                  <button
                    onClick={() => setShowDelete(true)}
                    className="px-4 py-2 my-1 text-white bg-red-500 hover:bg-red-700 cursor-pointer text-sm rounded-sm shadow-xl"
                  >
                    Delete Post
                  </button>

                  {showDelete && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40">
                      <div className="bg-red-100 w-1/2 p-6 rounded-xl shadow-lg text-center">
                        <h2 className="text-xl font-bold text-red-700">
                          ⚠️ Are you sure?
                        </h2>

                        <p className="text-red-600 mt-2">
                          This action cannot be undone.
                        </p>

                        <div className="mt-4 flex justify-center gap-4">
                          <button
                            onClick={() => setShowDelete(false)}
                            className="px-4 py-2 my-1 text-white bg-slate-500 hover:bg-slate-700 cursor-pointer text-sm rounded-sm shadow-xl"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={() => handleDelete(post.id)}
                            className="px-4 py-2 my-1 text-white bg-red-500 hover:bg-red-700 cursor-pointer text-sm rounded-sm shadow-xl"
                          >
                            Delete Post
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {!post && (
              <div className="flex flex-col justify-center items-center h-80 w-full">
                <h2 className="text-5xl text-red-700 py-2">
                  Post not found !!
                </h2>
                <p className="text-slate-500 py-5 text-xl">
                  Well, thats dissapointing.
                </p>
                <p>
                  <Link
                    to="/"
                    className="border border-green-500 bg-green-100 text-green-600 rounded hover:bg-green-600 hover:text-white px-4 py-2"
                  >
                    Visit our Homepage
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostPage
