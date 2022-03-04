import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import BlogApp from "./pages/BlogApp";
import SingleBlog from "./pages/SingleBlog";
import TasksApp from "./pages/TasksApp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TasksApp />} />
        <Route path="blogapp" element={<BlogApp />}/>
        <Route path="blogapp/:blogid" element={<SingleBlog />}/>

      </Routes>
    </div>
  );
}

export default App;
