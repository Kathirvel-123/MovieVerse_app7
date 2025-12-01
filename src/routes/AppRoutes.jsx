import { Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import MovieDetails from "../pages/MovieDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default AppRoutes;

