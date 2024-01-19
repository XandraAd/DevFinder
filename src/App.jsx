
import './App.css'
import { ThemeContext } from "./components/ContextProvider";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <ThemeContext>
        
        <Home />
      </ThemeContext>
    </>
  );
}

export default App;
