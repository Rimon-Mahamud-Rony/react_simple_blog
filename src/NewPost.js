import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="p-4 w-full">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 mx-auto flex">
              <div className="w-full lg:w-2/3 mx-auto bg-white rounded-2xl p-8 mt-10 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  ✍️ Add a New Post
                </h2>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  {/* Title */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="postTitle"
                      className="text-sm font-medium text-gray-700 mb-1"
                    >
                      Title
                    </label>

                    <input
                      id="postTitle"
                      type="text"
                      required
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      placeholder="Enter post title..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="postBody"
                      className="text-sm font-medium text-gray-700 mb-1"
                    >
                      Post Content
                    </label>

                    <textarea
                      id="postBody"
                      required
                      rows="5"
                      value={postBody}
                      onChange={(e) => setPostBody(e.target.value)}
                      placeholder="Write your post here..."
                      className="px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200 shadow-md cursor-pointer"
                  >
                    🚀 Publish Post
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NewPost
