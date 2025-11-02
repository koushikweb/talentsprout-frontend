import React from "react";

const Footer = () =>  {

    return (
        <footer className="bg-white border-t p-4 mt-4">
            <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
            </div>
        </footer>
    )
};

export default Footer;