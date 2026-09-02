import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Architecture from "./components/Architecture";
import Automation from "./components/Automation";
import Dashboard from "./components/Dashboard";
import Security from "./components/Security";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Project />
        <Architecture />
        <Automation />
        <Dashboard />
        <Security />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Umendra Bhati. Salesforce WhatsApp Automation.</p>
      </footer>
    </>
  );
}

export default App;