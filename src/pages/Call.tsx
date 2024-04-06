import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import Header from "../components/Header";

const Call = () => {
    return (
        <>
        <Header />
            <div className="windows">
                    <>
                        <div className="flex justify-between mx-auto max-w-screen-md">
                            <div className="w-1/2 px-4 flex items-center justify-center mt-20 border border-black-400 h-60vh mr-2">First Div</div>
                            <div className="w-1/2 px-4 flex items-center justify-center mt-20 border border-black-400 h-60vh ml-2">Second Div</div>
                        </div>
                    </>

            </div>
        </>
    );
};

export default Call;
