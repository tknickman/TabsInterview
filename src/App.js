import "./App.css";

import { One, Two, Three } from "./sections";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Welcome!" />
      <main>
        <One />
        <Two />
        <Three />
      </main>
      <Footer />
    </div>
  );
}

export default App;
