import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineBank } from "react-icons/ai";
const CheckoutSteps = ({ activeStep }) => {

    const steps = [
        {
            label: <h1>Shipping Details</h1>,
            icon: <MdLocalShipping />,
        },
        {
            label: <h1>Confirm Order</h1>,
            icon: <GiConfirmed />,
        },
        {
            label: <h1>Payment</h1>,
            icon: <AiOutlineBank />,
        },
    ];
    const stepStyles = {
        boxSizing: "border-box",
    };
    return (
        <div>

            <div alternativeLabel activeStep={activeStep} style={stepStyles}>
                {steps.map((item, index) => (
                    <div
                        key={index}
                        active={activeStep === index ? true : false}
                        completed={activeStep >= index ? true : false}
                    >
                        <div
                            style={{
                                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
                            }}
                            icon={item.icon}
                        >
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CheckoutSteps