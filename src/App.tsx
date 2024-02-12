import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/aboutme"
          element={
            <Layout>
              <AboutMe />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/blog-listing/:blogId"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
