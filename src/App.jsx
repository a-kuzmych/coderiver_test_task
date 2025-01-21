import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";
import OverviewSection from "./components/OverviewSection/OverviewSection";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <OverviewSection />
        <Buttons />
      </div>
    </>
  );
}

export default App;
