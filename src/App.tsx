// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import ExploreButton from "./components/ExploreButton";
import RestoButton from "./components/RestoButton";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <div className="container">
          <h2 className="place-title">La Union</h2>
          <p className="place-caption">
            This laid-back seaside town is well-known for its surfing locations,
            but few people realize that it is also rich in natural and
            historical features.
          </p>
          <ExploreButton />
          <RestoButton />
        </div>
      </header>
    </>
  );
}

export default App;
