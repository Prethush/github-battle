import { NavLink } from "react-router-dom";
import React from "react";

function Header(props){
    
        return (
            
                    <header className="px-64 flex justify-between  pt-20 pb-12">
                    <div>
                        <NavLink exact activeClassName="active" to="/">
                            <h3 className="inline-block text-xl font-bold">Popular</h3>
                        </NavLink>
                        < NavLink activeClassName="active" to="/battle">
                            <h3 className="inline-block text-xl ml-6 font-bold">Battle</h3>
                        </NavLink>
        
                    </div>
                    <div className="mr-24">
                        <i className={props.darkMode ? "fas fa-lightbulb text-2xl text-yellow-400": "fas fa-lightbulb text-2xl"} onClick={props.handleClick}></i>
                    </div>
                </header>
            
        );
   
}

export default Header;