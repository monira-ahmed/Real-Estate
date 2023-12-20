import React from "react";
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"
import {motion} from "framer-motion"
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter">

                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration:2,
                            type: "spring"
                        }}
                        >
                         Discover <br/>
                         Most Suitable <br/>Property</motion.h1>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="#ff922d" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                </div>
                 {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration:2,
                        type: "spring"
                    }}
                    className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero