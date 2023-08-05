import Footer from "./core/Footer";
import Header from "./core/Header";
import Tabs from "./core/Tabs";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <div className="py-5 px-2 grid">
      <Header />
      <Tabs />
      <div className="mb-9">
        <Hotel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
