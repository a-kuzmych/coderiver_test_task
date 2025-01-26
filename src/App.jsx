import "./App.css";
import BackgroundScene from "./components/BackgroundScene/BackgroundScene";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";
import OverviewSection from "./components/OverviewSection/OverviewSection";
import SliderComponent from "./components/Slider/Slider";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <BackgroundScene />
        <OverviewSection />
        <Buttons />
        <SliderComponent />
      </div>
    </>
  );
}

export default App;
