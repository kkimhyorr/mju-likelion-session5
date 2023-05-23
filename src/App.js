import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import InfoPage from "./components/InfoPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:id" element={<InfoPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
