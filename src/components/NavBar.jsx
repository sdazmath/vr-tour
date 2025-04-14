import React, { useState } from 'react'
// import logo from '../assets/Logo.jpg'
import { Link } from 'react-router-dom'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

const NavBar = () => {

    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }
    return (
        <>
            <header className="bg-teal-950">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-teal-600" href="/">
                        <img src="/images.jpg" alt="" className='h-12 rounded-full' />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm text-white font-semibold">
                                <li className=''>
                                    <Link className=" transition hover:text-gray-500/75" to="/about"> About </Link>
                                </li>
                                <li>
                                    <Link className=" transition hover:text-gray-500/75" to="#"> History </Link>
                                </li>

                                <li>
                                    <Link className=" transition hover:text-gray-500/75" to="#"> Places </Link>
                                </li>

                                <li>
                                    <Link className=" transition hover:text-gray-500/75" to="#"> Blocks </Link>
                                </li>
                            </ul>
                        </nav>

                        <div class="flex items-center gap-4">


                            <button onClick={() => setNavDrawerOpen(true)}
                                class="block rounded-sm  p-2.5 transition hover:text-gray-600/75 md:hidden"
                            >
                                <HiBars3BottomLeft className='text-sand text-xl' />

                            </button>
                        </div>


                    </div>
                </div>
            </header>

            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-night-shadow shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-end p-4'>
                    <button onClick={() => setNavDrawerOpen(false)}>
                        <IoMdClose className='h-6 w-6 text-sand cursor-pointer' />
                    </button>
                </div>
                <div className='p-4'>
                    {/* <h2 className='text-xl font-semibold mb-4'>Menu</h2> */}
                    <nav className='space-y-4 text-sand'>
                        <Link to='/about' onClick={toggleNavDrawer} className='block textgray-600 hover:text-sand'>About</Link>
                        <Link to='#' onClick={toggleNavDrawer} className='block textgray-600 hover:text-sand'>History</Link>
                        <Link to='#' onClick={toggleNavDrawer} className='block textgray-600 hover:text-sand'>Places</Link>
                        <Link to='#' onClick={toggleNavDrawer} className='block textgray-600 hover:text-sand'>Blocks</Link>

                    </nav>

                </div>
            </div>
        </>
    )
}

export default NavBar