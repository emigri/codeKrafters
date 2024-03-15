import React, { Component} from 'react';
// import { Link } from 'react-router-dom';

// import "./styles/style.css";



 function Navbar() {
   
   
        return (
            <div className='w-full fixed'>
                <div className='md:px-10 py-4 px-7 flex justify-between items-center bg-blue-100'>
                  
                    <div className='flex text-2xl cursor-pointer items-center gap-1'>
                    <span className='font-bold'>codeKrafters</span>
                    </div>
                   
                    <ul className='flex pl-5'>
                        <li className='font-semibold'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='font-semibold'>
                            <Link to='/product'>Product</Link>
                        </li>
                        <li className='font-semibold'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='font-semibold'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <button onClick className='btn bg-sky-400 hover:bg-sky-700 text-white rounded '>Account</button>

                    </ul>


                </div>

            </div>

        );
    }

export default Navbar;