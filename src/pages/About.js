import React from "react"
import aboutImg from "../img/About me.png"
import { FiGithub } from "react-icons/fi";
import { RiBehanceFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import {motion as m} from "framer-motion";

function About(){
    return(
        <m.div className="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: .25, duration: .5, ease: 'easeOut'}}
            exit={{opacity: 0}}
        >
            
            <div className="about-content">
                    
                    <m.img src={aboutImg}
                        initial={{x: "-200px"}}
                        animate={{x: "0px"}}
                        transition={{delay: .25, duration: .5, ease: 'easeOut'}}
                        exit={{x: "-200px"}}
                    ></m.img>
                    <m.div className="circle"
                        initial={{scale: "0"}}
                        animate={{scale: "100%"}}
                        transition={{delay: .25, duration: .5, ease: 'easeOut'}}
                        exit={{scale: "0"}}
                    ></m.div>
                    <m.div className="about-info"
                        initial={{y: "-100px"}}
                        animate={{y: "0px"}}
                        transition={{delay: .25, duration: .5, ease: 'easeOut'}}
                        exit={{y: "-100px"}}
                    >
                        <h1>Infomation</h1>
                        <h3>The Kiet</h3>
                        <p>Website developer</p>
                        
                    </m.div>

                    <m.div className="Contact-me"
                        initial={{y: "100px"}}
                        animate={{y: "0px"}}
                        transition={{delay: .25, duration: .5, ease: 'easeOut'}}
                        exit={{y: "100px"}}
                    >
                        <h3>Contact me</h3>
                        <FiGithub className="about-icon"/>
                        <RiBehanceFill className="about-icon"/>
                        <FaYoutube className="about-icon"/>
                    </m.div>
            </div>
        </m.div>
    );
}

export default About;