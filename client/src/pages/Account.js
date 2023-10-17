import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Redirect } from 'react-router-dom';
import { logout } from '../actions/userAction';



const Account = () => {


    const dispatch = useDispatch();
    const { error, loading, isAuthenticated, user } = useSelector(
        (state) => state.user
    );
    const handleLogout = () => {
        dispatch(logout());
    };

    if (!user || !isAuthenticated) {

        return <Navigate to="/" />;
    }
    return (
        <div className='px-5 h-screen '>
            <h1 className='text-center text-3xl font-bold py-3'>Account page</h1>
            <div className='bg-slate-100 rounded-2xl'>
                <div className='grid grid-cols-2 items-center'>

                    {/* part-1 */}

                    <div className='flex justify-center items-center flex-col gap-5 p-5'>
                        <img className='rounded-full' src={user.userImage} alt={user.name} width={400} />
                        <Link to={'/me/update'} className='bg-black text-white px-5 py-2'> Edit Profile</Link>
                    </div>

                    {/* part-2 */}

                    <div className=' gap-4 p-5'>
                        <h1 className='text-lg font-bold py-2'>Full Name</h1>
                        <h1 className='py-2'>{user.name}</h1>
                        <h1 className='text-lg font-bold py-2'>Email</h1>
                        <h1 className='py-2'>{user.email}</h1>
                        <h1 className='text-lg font-bold py-2'>Time</h1>
                        <h1 className='py-2'>{String(user.createdAt).substr(0, 10)}</h1>
                        <div className='py-2'>

                            <Link to={'/'} className='bg-black text-white px-5 py-2 '> My Orders</Link><br />
                        </div>
                        <div className='py-2'>

                            <Link to={'/'} className='bg-black text-white px-5 py-2'> Change password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account