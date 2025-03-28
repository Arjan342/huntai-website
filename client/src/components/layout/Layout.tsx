"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-white font-sans">
      <Header />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
