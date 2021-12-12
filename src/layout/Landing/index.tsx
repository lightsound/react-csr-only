import type { VFC } from "react";
import { Outlet } from "react-location";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const LandingLayout: VFC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
