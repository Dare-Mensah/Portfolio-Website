import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div className="py-4 bg-white w-full">
          <div className="flex justify-between items-center px-8">
            <div>
              <p className="text-3xl font-semibold">Portfolio</p>
            </div>
            <div>
              <ul className="flex gap-9 justify-between w-full">   
                <li>
                    <Link className="font-normal hover:font-bold text-xl" to="/">Home</Link>
                </li>
                <li>
                    <Link className="font-normal hover:font-bold text-xl" to="/WorkExperience">Work Experience</Link>
                </li>

                <li>
                    <Link className="font-normal hover:font-bold text-xl" to="/Projects">Projects</Link>
                </li>

                <li>
                    <Link className="font-normal hover:font-bold text-xl" to="/Education">Education</Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        </div>
      );
    };

export default Navbar
