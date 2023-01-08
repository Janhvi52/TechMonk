import React from "react";
import './Resources.css';
import symbol from '../assets/symbol.png';
import d1 from './d1.jpg';
import d2 from './d2.jpg';
import d3 from './d3.jpg';
import d4 from './d4.jpg';
import d5 from './d5.jpg';
import d6 from './d6.jpg';

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
        <h1>Resources</h1><br></br>
        <div className="doctor-container">
      
            <div className="container">
            <h2> <img src={d1} style={{display: "inline", width: "50px"}}></img>Dr. Niles Drake, MD</h2>
                <h4>124 reviews ⭐4.6</h4>
                <p>I'm a Podiatrists. Specialist in the feet and the lower limbs. I treat and manage pain and diseases, as well as injuries, to help keep people active and pain free. A lot of common issues are treatable by podiatrists, such as bunions. I can also help with ongoing issues or injuries.</p>
                <p>📍 Bangalore</p>
                <p>Contact details 📞: +91 8674893768 and 📩nilesdrake21@gmail.com</p>

            </div>
            <div className="container">
            <h2> <img src={d2} style={{display: "inline", width: "50px"}}></img>Dr. Parth Saxena</h2>
            <h4>20 reviews ⭐3.7</h4>
            <p>i'm a general practitioner trained to provide healthcare to patients of any sex or age. General practitioners often work as primary care physicians (PCPs), see their patients regularly, and are familiar with their medical backgrounds. Most people do (or should) see a PCP at least once a year. When you suspect something else is going on, your first stop is a PCP since we're responsible for your overall care and well-being. I can then refer you to the right specialist.</p>
            <p>📍 Delhi</p>
                <p>Contact details 📞: +91 8537325678 and 📩saxenaparth@gmail.com</p>
            </div>
            <div className="container">
            <h2> <img src={d3} style={{display: "inline", width: "50px"}}></img>Dr. Harley Thravits</h2>
            <h4>200 reviews ⭐4.8</h4>
                <p>I'm a pediatrician. A doctor that specializes in childhood medicine, or those under 18. Some pediatricians will see their patients until they are 21. Pediatricians oversee the health and development of babies and children. I administer vaccines. keep track of a child's growth, and are the first contact when a child a sick.</p>
                <p>📍 Chennai</p>
                <p>Contact details 📞: +91 9873451279 and 📩harley2001@gmail.com</p>
            </div>
            <div className="container">
            <h2> <img src={d4} style={{display: "inline", width: "50px"}}></img>Dr. Avinash Niar</h2>
            <h4>80 reviews ⭐3.9</h4>
            <p>I'm a Psychiatrists who focus exclusively on mental health. You may see a psychiatrist if you believe you have symptoms of mental illness. People usually seek out psychiatrists themselves, but some PCP's now are adding mental health screenings to yearly checkups, and may provide a referral. Psychiatrists can specialize in more than one mental illness, and can also specialize in treating substance abuse. Psychiatrists can informally specialize in specific age groups, though some informally prefer to work with different ages and on different illnesses as they gain experience with patients.</p>
            <p>📍 Bhubneshwar</p>
                <p>Contact details 📞: +91 4562349872 and 📩avinashniaridk@gmail.com</p>
            </div>
            <div className="container">
            <h2> <img src={d5} style={{display: "inline", width: "50px"}}></img>Dr. Emily Urbina</h2>
            <h4>160 reviews ⭐4.0</h4>
            <p>I'm a Allergist. Allergist/Immunologists are trained to treat allergies and disease of the immune system, such as asthma. If allergies can't be managed by over the counter medicines, you may see an allergist. You may also go to an allergist/immunologist if you need ongoing support managing an autoimmune disease, like Celiac disease.</p>
            <p>📍 Deheradun</p>
                <p>Contact details 📞: +91 2876547927 and 📩emily89@gmail.com</p>
            </div>
            <div className="container">
            <h2> <img src={d6} style={{display: "inline", width: "50px"}}></img>Dr. Jake Peralta & Dr. Emy Watson</h2>
            <h4>187 reviews ⭐4.7</h4>
            <p>We are neurologists who focuses on the anatomy, functions, and disorders of the nerves and nervous systems. Neurologists work with people who have had strokes and those with degenerative diseases of the nervous system, like multiple sclerosis. If you exhibit loss of motor of cognitive function, you could be referred to a neurologist.</p>
            <p>📍 Chandigarh</p>
                <p>Contact details 📞: +91 7766345780 and 📩emyjake@gmail.com</p>
            </div>
            </div>
        </div>
        </div>
    );
}