import { Routes, Route, useLocation } from "react-router-dom";

import NavigationBar from "./components/ui/NavigationBar";
import Footer from "./components/ui/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  const location = useLocation();

  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/signup";

  return (
    <div className="w-full flex flex-col">
      <header>
        <NavigationBar />
      </header>
      <main className="w-[100vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {showFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
