import "./App.css";
import Hero from "./components/hero/index";
import Plan from "./components/plan";
import Programs from "./components/programs";
import Reason from "./components/reason";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plan />
    </div>
  );
}

export default App;
