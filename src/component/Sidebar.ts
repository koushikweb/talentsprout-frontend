import React, { Children } from "react";
import { NavLink } from "react-router-dom";


 const NavItem = ({to, Children}) => (
    <NavLink
     to ={to}
     className={( { isActive }) => 
    `block px-4 py-2 rounded mb-1 hover:bg-green-50 ${isActive ? 'bg-green-100 font-medium' : 'text-gray-700'}`
    }
    >

    {Children}
    </NavLink>

 );
const Sidebar = () =>  {
    return (
        <aside className="w-64 bg-white border-r p-4">
            <nav>
                <NavItem to="/dashboard"></NavItem>
                <NavItem to="/jobs"></NavItem>
                <NavItem to="/profile"></NavItem>
            </nav>
        </aside>
    );
     
};

export default Sidebar;