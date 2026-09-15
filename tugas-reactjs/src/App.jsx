import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

// Tugas 7 - React Router

const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<HomeView />} />
      </Route>

      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  );
};

export default App;
