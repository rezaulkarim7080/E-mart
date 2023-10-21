import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NEW_PRODUCT_RESET } from '../../constants/productConstants';
import { clearErrors, createProduct } from '../../actions/productAction';

const CreateProductForm = () => {


    const dispatch = useDispatch();



    const { loading, error, success } = useSelector((state) => state.newProduct);

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState("");


    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert("Product Created Successfully");
            navigate("/admin/dashboard");
            dispatch({ type: NEW_PRODUCT_RESET });
        }
    }, [dispatch, error, navigate, success]);

    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("price", price);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.set("stock", stock);
        myForm.set("images", images);
        dispatch(createProduct(myForm));
    }



    return (
        <>
            <div className="h-screen">
                <div className="w-full max-w-md m-auto my-6 rounded-md shadow-lg sm:p-8 bg-slate-50">
                    <div>
                        <div>
                            <h2 className="mb-3 text-3xl font-semibold text-center">
                                Create an account
                            </h2>
                        </div>
                    </div>

                    {/* Form here */}
                    <form className="space-y-8" onSubmit={createProductSubmitHandler}>
                        <div className="space-y-2">
                            <div className="space-y-2">

                                <input
                                    type="text"
                                    placeholder="product name"
                                    name="name"
                                    id="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md text-black"
                                />
                            </div>
                            <div className="space-y-2">

                                <input
                                    type="text"
                                    placeholder="description"
                                    name="description"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md text-black"
                                />
                            </div>

                            <div className="space-y-2">

                                <input
                                    type="text"
                                    name="images"
                                    placeholder="images"
                                    id="images"
                                    value={images}
                                    onChange={(e) => setImages(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md text-black"
                                />
                            </div>
                            <div className="space-y-2">

                                <input
                                    type="number"
                                    name="price"
                                    placeholder="price"
                                    id="price"
                                    required
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md text-black"
                                />
                            </div>
                            <div className="space-y-2">

                                <input
                                    type="text"
                                    name="category"
                                    placeholder="category"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md text-black"
                                />
                            </div>
                            <div className="space-y-2">

                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="stock"
                                    id="stock"
                                    required
                                    onChange={(e) => setStock(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md text-black"
                                />
                            </div>
                            <button
                                // onClick={checkOutHandler}
                                type="submit"
                                disabled={loading ? true : false}
                                className="w-full px-8 py-3 font-semibold rounded-md  bg-cyan-600 text-white"
                            >
                                Create
                            </button>


                            {error && (
                                <h1 className=" font-semibold text-red-600">{error}</h1>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );


}
export default CreateProductForm