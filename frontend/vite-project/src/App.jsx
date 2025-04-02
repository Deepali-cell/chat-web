import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./protection/protectedRoute";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/registerpage" element={<RegisterPage />}></Route>
        <Route path="/loginpage" element={<LoginPage />}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}
