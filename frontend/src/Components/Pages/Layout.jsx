import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <nav className="w-full flex rounded-full border justify-between pl-3 pr-5 items-center bg-headerBlack">
        <h1>This should be a cool navbar</h1>
        <ul className="flex">
          <li className="navButton"><Link to="/">Add sql form</Link></li>
          <li className="navButton"><Link to="/about">Add noSql form</Link></li>
          <li className="navButton"><Link to="/contact">Show sql</Link></li>
          <li className="navButton"><Link to="/contact">Show noSql</Link></li>

        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;