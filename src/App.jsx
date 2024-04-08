// import components
import Navbar from "./Layouts/Navbar";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <footer className="p-3 text-center">
        <h6 className="mb-3">SHWE PHUE HMONE</h6>
        <p>© All CopyRights Reserved {year}</p>
      </footer>
    </div>
  );
};

export default App;
