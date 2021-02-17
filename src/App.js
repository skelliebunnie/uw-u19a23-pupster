import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import Home from './pages/Home'
import Discover from './pages/Discover'
import Search from './pages/Search'

function App() {
  return (
    <Router>
    <div className="App">
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Home} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </div>
    </Router>
  );
}

export default App;
