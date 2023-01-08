import React from "react";
import './Resources.css';
import symbol from '../assets/symbol.png';

export default function Resources(){
    return(
        <div id="Resources-Page">
        <h1> <img src={symbol} style={{display: "inline", width: "4%"}}></img>Useful Resources</h1>
        <ul style={{ display: "inline" }}>
            <li><a id="period" href="#periods">Periods</a></li>
            <li><a id="contra" href="#contraception">Contraceptives</a></li>
            <li><a id="mh" href="#mental">Mental Health</a></li>
        </ul>
        <br />
        <div>
        <h2>Periods</h2>
        <p id="periods" style={{paddingTop: "10px"}}>
        Menstruation in our country is associated with various myths and restrictions leading to lack of awareness among adolescent girls.
        Insufficient menstrual hygiene practices are the cause of stress associated with menstruation and reproductive tract infections.
        Sexually transmitted infections and HIV/AIDS are not openly discussed in our society making adolescents vulnerable to them.
        </p>
        <br />
        <a href="https://www.healthline.com/health/why-do-women-have-periods">Why women have periods?</a>
        <a href="https://youtu.be/Rj3tRnU-imQ">[Video] How to use a sanitary pad?</a>
        <a href="https://fsastore.com/learn-6-types-of-period-products-know-your-options.html">Types of Period products</a>
        <br />
        <br />
        <h2>Contraception</h2>
        <p id="contraception" style={{paddingTop: "10px"}}>
        Birth control, also known as contraception, anticonception, and fertility control, is the use of methods or devices to prevent unwanted pregnancy. 
        Birth control has been used since ancient times, but effective and safe methods of birth control only became available in the 20th century.
        </p>
        <br />
        <a href="https://www.healthline.com/health/birth-control-pills#takeaway">Birth Control Pills</a>
        <a href="https://en.wikipedia.org/wiki/Birth_control">Wikipedia Birth Control</a>
        <a href="https://www.healthline.com/health/birth-control-apps#best-app-for-every-user">Fertility tracker apps</a>
        <br />
        <br />
        <h2>Mental Health</h2>
        <p id="mental" style={{paddingTop: "10px"}}>
        Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
        Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. 
        <ul>Many factors contribute to mental health problems, including:
        <li>Biological factors, such as genes or brain chemistry</li>
        <li>Life experiences, such as trauma or abuse</li>
        <li>Family history of mental health problems</li>
        </ul>
        </p>
        <br />
        <a href="https://www.medicalnewstoday.com/articles/154543#definition">What is mental health?</a>
        <a href="https://www.healthline.com/health/mental-health/mental-health-apps">Best Mental Health Apps</a>
        <a href="https://www.marieclaire.com/health-fitness/g25843939/best-self-care-apps/">List of self-care apps</a>
        <br />
        <br />
        </div>
        </div>
    );
}