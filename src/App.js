import "./App.css";

import { One, Two, Three } from "./sections";
import Header from "./Header";
import Footer from "./Footer";

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
