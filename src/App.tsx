import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ComparePage from "./pages/compare";
import NMIMSPopup from "./pages/pop-up";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="comp" element={<ComparePage />} />
      <Route path="pop-up" element={<NMIMSPopup />} />
    </Routes>
  );
}
