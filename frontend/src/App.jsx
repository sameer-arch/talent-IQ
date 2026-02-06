import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import ProblemPage from "./pages/ProblemPage";
import DashboardPage from "./pages/DashboardPage";
import SessionPage from "./pages/SessionPage";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  // This will get rid of the flickering effect
  if (!isLoaded) return null;
  return (
    <Routes>
      <Route
        path="/"
        element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />}
      ></Route>
      <Route
        path="/dashboard"
        element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />}
      ></Route>
      <Route
        path="/problems"
        element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
      ></Route>{" "}
      <Route
        path="/problem/:id"
        element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />}
      ></Route>
      <Route
        path="/session/:id"
        element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />}
      ></Route>
    </Routes>
  );
}

export default App;
