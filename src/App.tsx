import { Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import GlobalLayout from "./layout/GlobalLayout";
import CategoryPage from "./page/CategoryPage";
import AddressPage from "./page/AddressPage";
import PromptPage from "./page/PromptPage";
import ResultPage from "./page/ResultPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVh(); // 초기 실행
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Index />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="address" element={<AddressPage />} />
        <Route path="prompt" element={<PromptPage />} />
        <Route path="result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
}

export default App;
