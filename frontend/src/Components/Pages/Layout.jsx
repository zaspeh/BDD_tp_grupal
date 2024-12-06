import { Outlet, Link } from "react-router-dom";
import { NavButton } from "../NavButton";
import { FaDatabase } from "react-icons/fa";


export const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <nav className="w-full flex rounded-full border justify-between pl-3 pr-5 items-center bg-headerBlack mb-3">
        <FaDatabase className="ml-4" size={30}/>
        <ul className="flex">
          <NavButton buttonText={"PostgreSql Entry Form"} linkTo={"/sqlForm"}/>
          <NavButton buttonText={"MongoDB Entry Form"} linkTo={"/noSqlForm"}/>
          <NavButton buttonText={"Show databases"} linkTo={"/showDb"}/>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;