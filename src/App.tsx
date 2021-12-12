import type { MakeGenerics, Route } from "react-location";
import { Outlet, ReactLocation, Router } from "react-location";

import { ApplicationLayout } from "./layout/Application";
import { LandingLayout } from "./layout/Landing";

type User = { id: string; name: string };

export type LocationGenerics = MakeGenerics<{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LoaderData: {
    user: User;
  };
}>;

const location = new ReactLocation<LocationGenerics>();

const routes: Route<LocationGenerics>[] = [
  {
    path: "/app",
    element: <ApplicationLayout />,
    loader: async () => {
      // ユーザー取得処理
      await new Promise((r) => {
        return setTimeout(r, 1000);
      });
      return { user: { id: "tanaka", name: "田中太郎" } };
    },
    children: [
      { path: "/", element: <div>ダッシュボード</div> },
      { path: "/settings", element: <div>設定ページ</div> },
    ],
  },
  {
    element: <LandingLayout />,
    children: [
      { path: "/", element: <div>LPトップページ</div> },
      { path: "/pricing", element: <div>プライシングページ</div> },
    ],
  },
];

export const App = () => {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
};
