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
import AboutPage from "./pages/AboutPage";
import ProblemsPage from "./ProblemsPage";

function App() {
  const { isSignedIn } = useUser();
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route
        path="/problems"
        element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
      ></Route>
    </Routes>
  );
}

export default App;
