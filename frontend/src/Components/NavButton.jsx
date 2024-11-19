import { Link } from "react-router-dom";

// .navButton {
//   background-color: #AEADF0;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 4px;
// }

export const NavButton = ({buttonText, linkTo}) => {
  return (

    <li className="bg-buttonBlue text-white border-none py-2 px-5 text-center inline-block text-base my-2 mx-1 cursor-pointer rounded-lg">
      <Link to={linkTo}>{buttonText}</Link>
    </li>


  );
};

export default NavButton;