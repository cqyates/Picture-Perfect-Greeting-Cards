
import './App.css';
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import {Outlet} from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
