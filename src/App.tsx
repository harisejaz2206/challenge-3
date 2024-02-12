import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/thankyou"
          element={
            <Thankyou />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
