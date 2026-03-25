import React from 'react'
import Feed from './Feed';

const Home = ({posts}) => {
  return (
    <div className='p-4'>
      <p className='bg-cyan-200 text-3xl text-center mx-auto py-4'>Home Page</p>
      {posts.length ? (
        <Feed posts={posts}/>
      ):
        (
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 w-full">
                      <div className='h-full border-2 border-red-500 border-opacity-90 rounded-lg overflow-hidden p-4 bg-red-100'>
                        <p className='text-center text-red-500 font-bold'>No posts are available</p>
                      </div>
                    </div>
                  </div>
              </div>
          </section>
            
        )}
      
    </div>
  );
}

export default Home
