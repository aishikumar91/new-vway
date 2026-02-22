import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useActivityTracker } from "@/hooks/useActivityTracker";

const Layout = ({ children }: { children: ReactNode }) => {
  useActivityTracker();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
