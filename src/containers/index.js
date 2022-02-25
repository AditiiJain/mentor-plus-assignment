import React from "react";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main";

const Index =() =>{

    return(<>
    <div className="flex">
    <Sidebar/>
    <Main/>
    </div>
    </>)
}
export default Index;