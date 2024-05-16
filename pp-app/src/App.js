import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App