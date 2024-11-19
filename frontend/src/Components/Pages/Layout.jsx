import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col h-100  border-red-500 border">
      <nav className="w-full">
        <h1>This should be a cool navbar</h1>
        <ul>
          <li><Link to="/">Add sql form</Link></li>
          <li><Link to="/about">Add noSql form</Link></li>
          <li><Link to="/contact">Show sql</Link></li>
          <li><Link to="/contact">Show noSql</Link></li>

        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;