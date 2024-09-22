import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Project from "./pages/Project";
import Skills  from "./pages/Skills";
// import NoPage from "./pages/NoPage";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Project" element={<Project />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


