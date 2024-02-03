import { NavLink } from "react-router-dom";

interface NavBarLinkProps {
  to: string
  title: string
}

const NavBarLink = ({
  to,
  title
} : NavBarLinkProps) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => (
        {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "green" : "black",
        }
      )}
    >
      {title}
    </NavLink>
  )
}

export default NavBarLink