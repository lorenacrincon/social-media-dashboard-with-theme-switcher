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
      <section className="dark:bg-slate-900 p-8 h-full lg:h-screen">
        <div
          className="bg-slate-400 dark:bg-slate-800 h-72 w-full absolute top-0 left-0 rounded-b-3xl"
          style={{
            zIndex: 0,
          }}
        ></div>
        <Header />
        <Followers />
        <Overview />
        <Attribution />
      </section>
    </>
  );
}

export default App;
