import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Post from "./components/Post";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
