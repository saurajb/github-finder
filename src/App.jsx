import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";
import Alert from "./components/layout/Alert";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar title="Github Finder" />
            <main className="container mx-auto  px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<UserProfile />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
