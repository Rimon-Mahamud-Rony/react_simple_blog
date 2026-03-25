import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*import { Route, Switch, useHisory } from "react-router-dom";
{v5	v6
Switch	Routes
component	element
useHistory	useNavigate
}*/

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 2,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 3,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 3,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    }
  ]);

  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleDelete = (id) => {
    //console.log('you are going to delete the post/'+id);
    const postlist = posts.filter(post => post.id !== id);
    setPosts(postlist);
    // toast.success(`<p style={color:red}>Item deleted successfully</p>`);
    toast.success(
      <div className="w-full text-center">
        <strong style={{ color: "red" }}>Item deleted successfully!</strong>
      </div>,
    );
  }
  
  return (
    <div className="App">
      <Header />
      <Nav search={search} setsearch={setSearch} />
      <main className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post" element={<NewPost />} />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={3000}
        />
      </main>
    </div>
  );
}

export default App;
