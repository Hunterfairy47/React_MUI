import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import BlogApp from "./features/BlogApp/pages/Main";
import SingleBlog from "./features/BlogApp/pages/SingleBlog";
import TasksApp from "./features/TasksApp/pages/Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TasksApp />} />
        <Route path="blogapp" element={<BlogApp />} />
        <Route path="blogapp/:blogid" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
