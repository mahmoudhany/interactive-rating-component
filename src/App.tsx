import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import Thanks from "./components/Thanks/Thanks";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/thanks/:rate" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
