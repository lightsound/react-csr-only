import { Link, useMatch } from "react-location";

import type { LocationGenerics } from "../../App";

const getActiveProps = () => {
  return {
    className: "font-bold text-red-500",
  };
};

export const Nav = () => {
  const {
    data: { user },
  } = useMatch<LocationGenerics>();

  return (
    <div className="flex flex-col h-full">
      <Link to="/app" getActiveProps={getActiveProps} activeOptions={{ exact: true }}>
        Dashboard
      </Link>{" "}
      <Link to="settings" getActiveProps={getActiveProps}>
        Settings
      </Link>
      <div className="mt-auto">
        <div>{user?.name}</div>
        <Link to="/" getActiveProps={getActiveProps}>
          サインアウト
        </Link>
      </div>
    </div>
  );
};
