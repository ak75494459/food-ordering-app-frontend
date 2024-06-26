import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";
import UserProfilePage from "./Pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./Pages/ManageRestaurantPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute/>}>
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />
      <Route
        path="/manage-restaurant"
        element={
          <Layout>
            <ManageRestaurantPage/>
          </Layout>
        }
      />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
