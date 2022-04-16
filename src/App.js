import logo from './logo.svg';
import './App.css';
import Header from './routes/Header'
import Appbar from './routes/Appbar'
import Footer from './routes/Footer'
import Home from './routes/Home'
import Subscribe from './routes/Subscribe';
import Topbar from './routes/Topbar';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Appbar />
      <Outlet />
      <Footer />
      {/* <Subscribe /> */}
    </div>
  );
}

export default App;
