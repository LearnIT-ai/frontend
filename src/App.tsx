import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
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
      <footer></footer>
    </div>
  );
}

export default App;
