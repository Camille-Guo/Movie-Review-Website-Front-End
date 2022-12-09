
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieHome from "./pages/MovieHome";
import MoviePopular from "./pages/MoviePopular";
import About from "./pages/About";
import IdentityPage from "./pages/Identity";
import UserProvider from "./contexts/UserContex";
import UpdatePassword from "./pages/UpdatePassword";
import DisplayMoviePage from "./pages/DisplayMoviePage";
import EditReview from "./pages/EditReview";
import DisplayUserInfo from "./pages/DisplayUserInfo";
import UserPage from "./pages/UserPage";
import MyReview from "./pages/MyReview";
import UserMyReview from "./components/UserMyReview";
import AddReview from "./pages/AddReview";
import SearchHome from "./pages/SearchHome";
import NoPage from "./pages/NoPage";
import MovieReviewsDisplay from "./components/MovieReviewsDisplay";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <UserProvider>
        <Router>
          <div class="main">
            <Routes>
              <Route path="/" element={<MovieHome />} />
              <Route path="/movie/:movie_id" element={<DisplayMoviePage />} />
              <Route path="/searchhome" element={<SearchHome />} />
              <Route path="/popular" element={<MoviePopular />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<DisplayUserInfo />} />
              <Route path="/myreview" element={<MyReview />} />
              <Route path="/user/edit" element={<UserPage />} />
              <Route path="/identity" element={<IdentityPage />}>
                <Route path="#:slug" element={<IdentityPage />} />
              </Route>
              <Route
                path="/user/update-password"
                element={<UpdatePassword />}
              />
              <Route path="/addreview/:movie_id" element={<AddReview />} />

              <Route path="/edit/:id" element={<EditReview />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </>
  );
}
export default App;
