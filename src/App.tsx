import "./App.css";

function App() {

  const handleClick = () => {
    // Dispatch custom event to parent
    document.dispatchEvent(
      new CustomEvent("PLP_EVENT", {
        detail: {
          message: "Hello from PLP child app!",
          timestamp: Date.now(),
        },
      })
    );
  };
  return (
    <>
    
      <p>This is plp page </p>
      <button onClick={handleClick}>
        click to send event to parent application{" "}
      </button>
    </>
  );
}

export default App;
