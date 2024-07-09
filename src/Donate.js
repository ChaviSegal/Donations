import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import { useContext } from "react";
import MyForm from './MyForm';
import MyColorContext from "./Context";
import Home from "./Home";
import Navbar from "./Navbar";
const Donate = (props) => {
    const { borderColor, setBorderColor } = useContext(MyColorContext);
    return (<>
        {/* <div style={{backgroundColor: borderColor}}><Navbar /></div> */}
        <div className="donate" >

            <MyForm addContribution={props.addContribution} />

        </div>
    </>)
}
export default Donate;




