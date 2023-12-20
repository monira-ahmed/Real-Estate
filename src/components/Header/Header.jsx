import React from "react";
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                <img src="./logo.png" alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    
                    <button className="button">
                    <a href="#get-started">Get Started</a>
                    </button>
                    
                </div>

            </div>
        </section>
    );
};

export default Header;