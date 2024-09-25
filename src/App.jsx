import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  const [count, setCount] = useState(0);

  const div1style = "sm:col-span-2 min-h-24 rounded-md shadow-md bg-orange-500";

  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen ">
          <Navbar title="Github Finder" />
          <main className="container mx-auto  px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<Notfound />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
