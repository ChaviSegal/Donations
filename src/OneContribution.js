import MyColorContext from "./Context"; 
import { useContext } from 'react';
import MyRateContext from "./RateContext";
import { fromShekellsToX} from "./donationHelpr";



const OneContribution=(contribution)=>{
    const {borderColor,setBorderColor}=useContext(MyColorContext);
    let rate = useContext(MyRateContext);

    return (<>
    
    <div className="contribution">
        <div className="donorName"> Name: {contribution.contribution.name}</div>
       <div className="donorAmount">Anount: {fromShekellsToX(contribution.contribution.donationAmount, rate.dollar ,rate.currentCoin)}</div>
        <div className="donorDeditation">Deditation: {contribution.contribution.deditation}</div>
</div>

</>)}
 export default OneContribution;