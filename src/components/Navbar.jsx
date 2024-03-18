import { Link } from "react-router-dom";
import "../App.css";
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

// import "./styles/style.css";

function Navbar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/ProductCatalogue" },
    { title: "About", path: "/About" },
    { title: "Contact", path: "/Contact" },
   
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10  py-4 px-7 md:flex justify-between items-center bg-blue-100">
       {/* logo  */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <CodeBracketIcon className="w-7 h-7 text-blue-600"/>
          <span className="font-bold">codeKrafters</span>
        </div>
         {/* Basket Icon */}
         <div className="flex text-2xl cursor-pointer items-center gap-2 ml-auto">
          <Link to="/Basket">
            <ShoppingCartIcon className="w-7 h-7 text-blue-600"/>
         </Link>
      
        </div>

       {/* Navigation Links */}
        <ul className="flex space-x-7">
          {navLinks.map((link, index) => (
            <li className=" font-semibold my-7 md:my-0 md:ml-7" key={index}>
              <Link className="font-semibold" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
          
        </ul>
        


      </div>
    </div>   
  );
}

export default Navbar;
