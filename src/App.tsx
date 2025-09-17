
import { useEffect } from "react";
import "./App.css";
import PlpPage from "./components/PlpPage";

function App() {
   useEffect(() => {
    // ✅ Trigger custom event after app mount
    const event = new CustomEvent("load", {
      detail: { message: "PLP Page Loaded Successfully" }, // you can pass any payload
    });

    document.dispatchEvent(event);

   
  }, []);
  return (
    <>
      <PlpPage />
    </>
  );
}

export default App;
