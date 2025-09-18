import { Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import GlobalLayout from "./layout/GlobalLayout";
import CategoryPage from "./page/CategoryPage";
import AddressPage from "./page/AddressPage";
import PromptPage from "./page/PromptPage";
import ResultPage from "./page/ResultPage";

function App() {
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
