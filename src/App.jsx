import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA.jsx";

//1. Create Context
const ThemeContext = createContext();

function App() {
  //2. place all child inside provider
  //3. pass value
  // const [user, setUser] = useState({name: "Anmol Saxena"});
  const [theme, setTheme] = useState("light");
  //4. Consume value
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="container" style={{backgroundColor:theme==='light'?'beige':'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
// export { UserContext }
export {ThemeContext}
