import { Link } from "react-router-dom";

// import "./styles/style.css";

function Navbar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/product" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Basket", path: "/basket" }
  ];
  return (
    <div className="w-full fixed">
      <div className="md:px-10 py-4 px-7 flex justify-between items-center bg-blue-100">
        <div className="flex text-2xl cursor-pointer items-center gap-1">
          <span className="font-bold">codeKrafters</span>
        </div>

        <ul className="flex pl-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link className="font-semibold" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
          <button className="btn bg-sky-400 hover:bg-sky-700 text-white rounded ">
            Account
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
