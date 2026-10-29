import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route path="/highlights" component={Highlights} />
        <Route path="/featured" component={Featured} />
        <Route path="/discounted" component={Discounted} />
        <Route path="/explore" component={Explore} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
