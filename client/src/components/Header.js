/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Redirect } from 'react-router-dom';
import { logout } from '../actions/userAction';
import Loader from '../loader/Loader';


const Header = () => {

    const dispatch = useDispatch();
    const { error, loading, isAuthenticated, user, } = useSelector(
        (state) => state.user
    );

    const { cartItems } = useSelector((state) => state.cart);

    const [nav, setNav] = useState(false);

    const handlenav = () => {
        setNav(!nav);
    };
    const handleLogout = () => {
        dispatch(logout());
    };


    return (
        <>
            {loading ? (
                <Loader />
            ) : (<div className=" flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 bg-slate-50">
                <Link to={'/'}>
                    <h1 className="width-full text-3xl font-bold text-[#ffb30d]">
                        E-Shop
                    </h1>
                </Link>

                <ul className="hidden md:flex items-center">
                    <Link to={'/'}>
                        <li className="p-4 hover:text-[#ffb30d]">Home</li>
                    </Link>
                    <Link to={'/search'}>
                        <li className="p-4 text-center border-b border-b-[#2b2a2a]">search</li>
                    </Link>
                    <Link to={'/products'}>
                        <li className="p-4 hover:text-[#ffb30d]">Products</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className="p-4 hover:text-[#ffb30d]">Cart <span className='bg-[#ffb30d] rounded-full px-2'>{cartItems.length}</span></li>
                    </Link>



                    {/* Conditional rendering based on user */}
                    {user ? (
                        <div className="flex items-center gap-3">
                            <h1>{user.name}</h1>
                            <Link to={'/account'}>
                                <img className='rounded-full' src={user.userImage} alt={user.name} width={50} />
                            </Link>

                            {user.role === 'admin' ?
                                (
                                    <div>
                                        <ul>
                                            <li>
                                                <Link to={'/admindashboard'}>admin Dashboard</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )
                                :
                                (
                                    <ul>
                                        <li>
                                            <Link to={'/userdashboard'}>User Dashboard</Link>
                                        </li>

                                    </ul>)
                            }
                            <button
                                className="bg-[#ffb30d] text-black px-3 py-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className='flex'>
                            <Link to={'/signup'}>
                                <li className="p-4 hover:text-[#ffb30d]">Signup</li>
                            </Link >
                            <Link to={'/login'}>
                                <li className="p-4 hover:text-[#ffb30d]">Login</li>
                            </Link>
                        </div>
                    )}
                </ul>

                {/* Reaponsive */}

                <div onClick={handlenav} className="block md:hidden z-100">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[80%]  h-full bg-[#49d4a8] ease-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className="pt-24 uppercase">
                        <Link to={'/'}>
                            <li className="p-4 text-center border-b border-b-[#ffffff]">Home</li>
                        </Link>

                        <Link to={'/products'}>
                            <li className="p-4 hover:text-[#ffb30d]">Products</li>
                        </Link>
                        {/* <Link to={'/blogs'}>
                           <li className="p-4 text-center border-b border-b-[#ffffff]">Blogs</li>
                       </Link> */}
                        <Link to={'/contact'}>
                            <li className="p-4 text-center border-b border-b-[#ffffff]">Contact</li>
                        </Link>
                        <Link to={'/signup'}>
                            <li className="p-4 text-center border-b border-b-[#ffffff]">Signup</li>
                        </Link >
                        <Link to={'/login'}>
                            <li className="p-4 text-center border-b border-b-[#ffffff]">Login</li>
                        </Link>
                    </ul>
                </div>
            </div >)}
        </>

    )
}

export default Header