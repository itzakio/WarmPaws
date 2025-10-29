import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import AOS from "aos";

const RootLayout = () => {
  const { userLoading } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location]);

  if (userLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 bg-background">
        <Outlet />
      </main>
      <footer className="bg-color-secondary">
        <Footer />
      </footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RootLayout;
