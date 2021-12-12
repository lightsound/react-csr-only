import { Link } from "react-location";

const getActiveProps = () => {
  return {
    className: "font-bold text-red-500",
  };
};

export const Header = () => {
  return (
    <div>
      <div>
        <Link to="/" getActiveProps={getActiveProps}>
          Home
        </Link>{" "}
        <Link to="pricing" getActiveProps={getActiveProps}>
          Pricing
        </Link>{" "}
        <Link to="app" getActiveProps={getActiveProps}>
          App
        </Link>
      </div>
      <hr />
    </div>
  );
};
