import React from "react";
import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import Sidebar from "../src/component/Sidebar";


const Layout =({children})=> {

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="">{children}</main>
            </div>
            <Footer />
        </div>
       
    );
}
export default Layout;