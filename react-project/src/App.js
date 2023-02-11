import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Moment from "./components/Moment/Moment";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Service />
      <Moment />
      <Footer />
    </div>
  );
}

export default App;
