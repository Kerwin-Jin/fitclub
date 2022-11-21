import "./App.css";
import Hero from "./components/hero/index";
import Join from "./components/join";
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
      <Join />
    </div>
  );
}

export default App;
