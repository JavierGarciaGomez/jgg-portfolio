import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ProjectPage } from "../pages/ProjectPage";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project/:projectId" element={<ProjectPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
