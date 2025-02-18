import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;