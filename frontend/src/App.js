import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import CourseDetailsPage from "./pages/CourseDetailsPage/CourseDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/course-details/:courseSlug"
          element={<CourseDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
