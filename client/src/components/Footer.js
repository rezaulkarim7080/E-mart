import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 
        text-gray-900">
            <div>
                <h1 className="width-full text-3xl font-bold text-[#ffb30d]">
                    E-Shop
                </h1>
                <p className="py-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
                    accusantium tenetur alias odit error, quae aspernatur esse a rem fuga!
                </p>
                <div className="flex justify-between md:w-[40%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaDribbbleSquare size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>

            <div className="flex justify-between mx-10">
                {/* part-1 */}
                <div className="lg:col-span-3 ">
                    <h5 className="font-medium ">Solutions</h5>
                    <ul>
                        <li className="py-2 text-sm"> Analytics</li>
                        <li className="py-2 text-sm"> Marketting</li>
                        <li className="py-2 text-sm"> Commerce</li>
                        <li className="py-2 text-sm"> Insights</li>
                    </ul>
                </div>
                {/* part-2 */}
                <div className="lg:col-span-3 ">
                    <h5 className="font-medium ">Suppport</h5>
                    <ul>
                        <li className="py-2 text-sm"> Pricing </li>
                        <li className="py-2 text-sm"> Documentation</li>
                        <li className="py-2 text-sm"> Guides</li>
                        <li className="py-2 text-sm"> Api Status</li>
                    </ul>
                </div>
                {/* part-3 */}
                <div className="lg:col-span-3 ">
                    <h5 className="font-medium ">Company</h5>
                    <ul>
                        <li className="py-2 text-sm"> About</li>
                        <li className="py-2 text-sm"> Blogs</li>
                        <li className="py-2 text-sm"> Press</li>
                        <li className="py-2 text-sm"> Creear</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Footer