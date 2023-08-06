import { Outlet } from "react-router-dom";
import Footer from "./core/Footer";
import Header from "./core/Header";
import Tabs from "./core/Tabs";

function App() {
  return (
    <div className="py-5 xl:py-10 px-2 grid xl:overflow-hidden xl:h-screen xl:grid-flow-row-dense xl:grid-rows-4 xl:grid-cols-6">
      <div className="relative  w-full justify-center items-center flex">
        <Header />
      </div>
      <div className="mb-9 xl:mb-0 row-span-4 w-full xl:r relative md:grid md:grid-cols-4 xl:col-span-5 xl:col-start-1 xl:row-start-1">
        <Tabs />
        <Outlet />
      </div>
      <div className="relative w-full justify-center items-center flex">
        <Footer />
      </div>
    </div>
  );
}

export default App;
