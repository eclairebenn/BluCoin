import React from "react";
import { NavLink } from "react-router-dom";

function NavigationLink(props: {
  name: string;
  route: string;
  style: { color: string };
}) {
  return (
    <>
      <NavLink to={props.route} activeStyle={props.style} exact>
        {props.name}
      </NavLink>
      {"|"}
    </>
  );
}
const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavigationLink
        route="/"
        name="Home"
        style={activeStyle}
      ></NavigationLink>
      <NavigationLink
        route="/tickers"
        name="Tickers"
        style={activeStyle}
      ></NavigationLink>
      <NavigationLink
        route="/about"
        name="About"
        style={activeStyle}
      ></NavigationLink>
    </nav>
  );
};

export default Header;
