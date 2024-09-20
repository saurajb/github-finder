import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

function App() {
  const [count, setCount] = useState(0);

  const div1style = "sm:col-span-2 min-h-24 rounded-md shadow-md bg-orange-500";

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen ">
        <Navbar title="Github Finder" />
        <main className="container mx-auto  px-3 pb-12"> Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
