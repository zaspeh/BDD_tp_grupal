import { Outlet, Link } from "react-router-dom";
import { NavButton } from "../NavButton";

export const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <nav className="w-full flex rounded-full border justify-between pl-3 pr-5 items-center bg-headerBlack">
        <h1>This should be a cool navbar</h1>
        <ul className="flex">
          <NavButton buttonText={"Add sql form"} linkTo={"/sqlForm"}/>
          <NavButton buttonText={"Add noSql form"} linkTo={"/noSqlForm"}/>
          <NavButton buttonText={"Show sql"} linkTo={"/showSql"}/>
          <NavButton buttonText={"Show noSql"} linkTo={"/showNoSql"}/>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;