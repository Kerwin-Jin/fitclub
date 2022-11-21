import "./App.css";
import Footer from "./components/footer";
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
      <Footer />
    </div>
  );
}

export default App;
