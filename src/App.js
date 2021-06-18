import './App.css';
import {
  BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Products from "./components/Products";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return <Router>
    <Header />
    <Route path="/login" component={Login} />
    <Products />
  </Router>
}

export default App;
