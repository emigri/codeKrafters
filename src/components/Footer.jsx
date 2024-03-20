import "./SiteContent.json";

function Footer() {
  return (
    <footer className="shadow-md w-full bottom-0 left-0 z-50">
      <div className=" w-full md:px-10  py-4 px-7 md:flex justify-between items-center bg-teal-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href="#" className="hover:underline text-stone-300 gap-2">
            Code Krafters
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="hover:underline text-stone-300 gap-2 me-4 md:me-6"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline text-stone-300 gap-2 me-4 md:me-6"
            >
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-stone-300 gap-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
