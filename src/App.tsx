import { Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import GlobalLayout from "./layout/GlobalLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
}

export default App;
