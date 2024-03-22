import "./SiteContent.json";
import React, { useState, useEffect} from 'react';
function Footer() {
  const bodyTag = document.getElementById("body");
  const [theme, setTheme] = useState({
    themeClassName : 'default',
  });
  useEffect(()=>{
    bodyTag.classList.remove(...bodyTag.classList);;
    bodyTag.classList.add(theme.themeClassName);
  })

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  return (
    <>
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
    <div className="theme-select">
          <ul className="theme-list">
            <span>Theme Select</span>
            <li>
                <input onChange={(e)=> setTheme({...theme, themeClassName: e.target.value})} type="checkbox" id="dark-option" value="dark" className="hidden peer" required=""/>
                <label htmlFor="dark-option" className="items-center w-full p-5">                           
                    <div className="block">
                        <div className="font-semibold">Dark</div>
                    </div>
                </label>
            </li>
            <li>
                <input onChange={(e)=> setTheme({...theme, themeClassName: e.target.value})} type="checkbox" id="light-option" value="light" className="hidden peer"/>
                <label htmlFor="light-option" className="items-center w-full p-5">
                  <div className="block">
                      <div className="font-semibold">Light</div>
                  </div>
                </label>
            </li>
            <li>
                <input onChange={(e)=> setTheme({...theme, themeClassName: e.target.value})} type="checkbox" id="default-option" value="default" className="hidden peer"/>
                <label htmlFor="default-option" className="items-center w-full p-5">
                    <div className="block">
                        <div className="font-semibold">Default</div>
                    </div>
                </label>
            </li>
          </ul>
        </div>
    
    </>
  );
}

export default Footer;
