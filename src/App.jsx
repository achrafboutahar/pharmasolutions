import "./App.css";
import Layout from "./components/Layout/Layout";
import { Home, About, Services, Solutions, Contact } from "./sections";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <About />
        <Services />
        <Solutions />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
