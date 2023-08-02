import Attribution from "./components/Attribution";
import "./App.css";
import "../src/styles/dashboard.css";
import "../src/styles/header.css";
import Header from "./components/Header";
import Followers from "./components/Followers";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <section className="p-5 container mx-auto">
        <Header />
        <Followers />
        <Overview />
        <Attribution />
      </section>
    </>
  );
}

export default App;
