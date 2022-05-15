import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Navbar from "./Navbar";
import BlogList from "./BlogList";
import Form from "./Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList />}>
            {/* <BlogList /> */}
          </Route>
          <Route path="/create" element={<Form />}>
            {/* <Form /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
