import "./App.css";
import Hero from "./components/hero/index";
import Plan from "./components/plan";
import Programs from "./components/programs";
import Reason from "./components/reason";
import Testimonials from "./components/testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plan />
      <Testimonials />
      <div>lorem*30</div>
    </div>
  );
}

export default App;
