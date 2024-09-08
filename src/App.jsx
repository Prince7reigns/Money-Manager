import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "@/components/index";

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

