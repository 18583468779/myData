import { Navigate } from "react-router-dom";
import "./App.css";

import { useLocalStore } from "./store/useLocalStore";

function App() {
  const { hasWelcome } = useLocalStore((state) => state);
  if (hasWelcome) {
    return <Navigate to={"/home"}></Navigate>;
  } else {
    return <Navigate to={"/welcome/1"}></Navigate>;
  }
}

export default App;
