import "./About.css"
import ok from "../assets/homepage.png"
import my from "./about.png"
import React from 'react'

const About = () => {
  return (
    
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={ok} alt="no-image-found"/>
        </div>
        <h1>About Us</h1>
        <div className="mask1">

        <img className="mask11" src={my} alt="no-image-found"/>
        </div>
        <div className="content">
            <p>
Women's experience of health and disease differ from those of men, due to unique biological, social and behavioral conditions. It also includes physical, mental, emotional health. Certain issues also include medical situations in which women face problems not directly related to their biology, such as gender-differentiated access to medical treatment and other socioeconomic factors. Women's health is of particular concern due to widespread discrimination against women in the world, leaving them disadvantaged. This is why FemmeCare was created. To create awareness among women of different age groups about their own health and facilitate community bonding through chat rooms in order to create a sense of "We're all in this together!"</p>
        </div>
    </div>
  )
}

export default About
