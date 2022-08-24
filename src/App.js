import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagenotfound from "./components/Pagenofound";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Register" component={Register} />
          <Route path="/*" component={Pagenotfound} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
