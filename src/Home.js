import React from "react";
import MyColorContext from "./Context";
import { useContext } from 'react';
import { useState } from "react";
import MyForm from './MyForm';
import Goal from "./Goal";
import Navbar from "./Navbar"
import ChangeColorButton from './ChangeColorButton';
// export let addAmount=(newAmount)=>{
//     amountObtained+=newAmount
// }
const Home = (props) => {

    const { borderColor, setBorderColor } = useContext(MyColorContext);
    console.log("the coor is" + borderColor)

    return (<>
        {/* <div style={{backgroundColor:borderColor}}><Navbar /></div> */}

        <div className="myHome">
            <div className="aboutP">
            <p className="about" >

                <h1 >Holding hands making smiles</h1>
                At HCS, we believe every human being is a Precious Treasure. Special. Unique. Exceptional.
                This straightforward ideal motivates us to illuminate the lives of those we touch every day.
                To embrace those who join us on our Special Journey.

                This has been our guiding principle since our founding more than 20 years ago, in 1997.
                With more than a dozen programs and services dedicated to uplift those with special challenges, the HCS Family is there to guide you through it all.
                Holding hands at every step of this remarkable journey.</p>
                </div>
                
            <div className="goal" style={{ borderColor }}>
            
                <p><Goal arrDonations={props.arrDonations} /></p>
               
                <img className="goalimg" src="data:image/jpeg;base64,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"></img>
            </div>
            <div className="home">
            <img className="children" src="https://www.hcsny.org/images/home-boy.jpg"/>
            <img className="logo2" src="https://www.example.com/image.png"/>
                {/* <img className="children" src="https://www.hcsny.org/images/home-journey.jpg"></img> */}
                {/* <img className="children" src="https://www.hcsny.org/images/home-together.jpg"></img> */}

                {/* <h1>"the goal" 1000000</h1> */}
            </div>


            <footer><h1>real people. real lives.</h1></footer>


        </div>
    </>)
}
export default Home;