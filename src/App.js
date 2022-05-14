// import BlogList from "./BlogList";
import Form from "./Form";
import "./index.css";
import Navbar from "./Navbar";

function App() {
  const blogs = [
    { id: 1, title: "A Happy day", author: "Brendan Rogers" },
    { id: 2, title: "A Happy day", author: "Brendan Rogers" },
    { id: 3, title: "A Happy day", author: "Brendan Rogers" },
    { id: 4, title: "A Happy day", author: "Brendan Rogers" },
  ];

  console.log(blogs);
  return (
    <div className="App">
      <Navbar />
      {/* <BlogList blogs={blogs} /> */}
      <Form />
    </div>
  );
}

export default App;
