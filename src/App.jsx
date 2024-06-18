import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Navigate to= "/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
