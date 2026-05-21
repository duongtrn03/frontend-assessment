import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Exercise1 from "./pages/Exercise1/Exercise1";
import Exercise2 from "./pages/Exercise2/Exercise2";
import Home from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
      </Route>
    </Routes>
  );
}

export default App;
