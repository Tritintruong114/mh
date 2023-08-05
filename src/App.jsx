import { Outlet } from "react-router-dom";
import Footer from "./core/Footer";
import Header from "./core/Header";
import Tabs from "./core/Tabs";

function App() {
  return (
    <div className="py-5 px-2 grid w-full">
      <Header />
      <div className="mb-9 w-full h-screen md:grid md:grid-cols-4">
        <Tabs />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
