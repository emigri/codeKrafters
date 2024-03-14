import React, { Component} from 'react';
import "./styles/style.css";



export default class Navbar extends Component {
    let Links = [
        {name: 'Home', link:'/' },
        {name: 'Service', link:'/' },
        {name: 'About', link:'/' },
        {name: 'Contact', link:'/' },
        
        
    ]


    render() {
        return (
            <div className='w-full fixed'>
                <div className='md:px-10 py-4 px-7 flex justify-between items-center bg-blue-100'>
                    {/* logo */}
                    <div className='flex text-2xl cursor-pointer items-center gap-1'>
                    <span className='font-bold'>codeKrafters</span>
                    </div>
                    {/* nav links*/}
                    <ul className='flex pl=5'>
                        {
                            Links.map(link => (
                                <li className='font-semibold'>
                                    <a href='/'>{link.name}</a>
                                </li>
                            ))
                        }
                        <button onClick className='btn bg-sky-400 hover:bg-sky-700 text-white rounded '>Acount</button>

                    </ul>


                </div>

            </div>

        )
    }
}