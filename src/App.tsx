import { Route, Routes } from "react-router-dom";
import Layout from "./pages/LayOuts/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Team from "./pages/teams";
import Projects from "./pages/projects";
import NoPage from "./pages/NoPage";
import CaseStudiesView from "./pages/case-studies-view";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="tech-talks" element={<Blogs />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="case-studies-view" element={<CaseStudiesView />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
