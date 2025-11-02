import React from "react";

const Header = () =>  {

    return (
         <header className="bg-white shadow p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-semibold">Job Portal</h1>
                <h1 className="text-sm text-gray-600">Welcome</h1>
            </div>
         </header>
    );
};

export default Header;