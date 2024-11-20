import { Link } from "react-router-dom";

export const NavButton = ({buttonText, linkTo}) => {
  return (

    <Link to={linkTo} className="h-10 w-40 bg-buttonBlue text-white border border-white-500 py-2 px-5 text-center inline-block text-base my-2 mx-1 cursor-pointer rounded-lg">
      <li className="list-none">
      {buttonText}
      </li>
    </Link>
    
  );
};

export default NavButton;