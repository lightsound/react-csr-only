import type { VFC } from "react";
import { Outlet } from "react-location";

import { Nav } from "./Nav";

export const ApplicationLayout: VFC = () => {
  return (
    <div className="flex min-h-screen">
      <nav className="border-r">
        <Nav />
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
