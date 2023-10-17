import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const history = useNavigate();
    const [keyword, setKeyword] = useState("");


    const searchSubmitHandeler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history(`/products/${keyword}`);
        }
    }
    return (
        <div>
            <form onSubmit={searchSubmitHandeler} className='py-5 text-center'>
                <input type="text" placeholder='search a product' onChange={(e) => setKeyword(e.target.value)} className=' bg-slate-50 py-3 w-[60%]' /><br />

                <input type="submit" value="search" className=' bg-[#ffb30d] py-2 px-5 border-black border-[1px] ' />
            </form>
        </div>
    )
}

export default Search