import { useContext } from "react";
// import { MyRateContext } from "./App";
import { fromShekellsToX, sumArray} from "./donationHelpr";
import Donations from "./Donations";
import MyRateContext from "./RateContext";



const Goal = (props) => {
    let rate = useContext(MyRateContext);
    const theGoal = 1000000;
    let TheAmountDonated = 0;
    let ThePercentageOfTheAmountDonated = 0;
    let TheNumberOfDonors =props.arrDonations.length;
    props.arrDonations.forEach(element => {
        TheAmountDonated += Number(element.donationAmount)
    });

    return (<>
        <div className="goalDetales">
            <h1>About our campaign:</h1>
            <h3>The amount donated: {fromShekellsToX(TheAmountDonated, rate.dollar, rate.currentCoin)}</h3>
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAD8/PwWFhbY2Ni7u7utra2wsLBWVlahoaFSUlLo6Oibm5tDQ0PHx8empqaIiIjExMS4uLj19fXv7+8iIiJdXV3Nzc2dnZ2Li4vb29sODg6BgYEvLy+QkJBvb28mJiYaGho1NTU8PDxycnJKSkpxcXFmZmY6OjpYKOpgAAAEbUlEQVR4nO2d7VbiMBCGk/KhCGr5RrCgoOve/xVudXvO2pmEpqHFme77/GVo8tiapMkkGAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA3Sc78i8Un45zFPIm92tf3/zFvsqYVJKcsy16+WBa8ftL7ZFdgC3a91+VxlQ4H47rFpLbEcxsqHpKdjWK16dcp5icNe3GGOct0HfzU6jTMyUaB/1FqDa3tpUGOT3oNcx4DitFtaI/VjY5yQ2s3VcXsy/HpNdQKmjG0HxWtqn5Dm51vcDpgaJeLc8V0wdBm5xQ7YWiPZ/4XBRmmIz+b/T5dvfgVD/5iiOHT9QSZ4bb6K9vhwaPo7/sncgzD3hiSwcqp6P22OsOc7YfD8N0XrdHQmOmSKw49sToNzdzxqHo6fqWGxjwzQ8+YmhjuG6h5KJcZOhTdneJGraFh7c3EGabYcE6bm57zJo70GpopvYkzV5RmQ/ac3rqCVBtu6U10TRerNjS0V3T1+roN18Rw5Yh5VG1oaHPqGNcQQ3eX0g5NGJIBi13zEOWGY1tZf+WGSVa+xh0PUW5o3shN5BHaDWfEkPeI2g1ppz9gEdoNF6S/4DNSxLBynaNBGjE0d+WL/GIB6g1JU3NkAeoNSZ+/YwHqDelLIgsghqNLq12DZgzp4Jst0qg3pN0FWxtQb7gghmzsrd6QXmVKA9Qb0lfEKsOQBJWmaMiQvF2wYZtkw5tJCc9f4KjY8L38uWdx6VSOYnOmkg1vy5/fuC9zXxGl37DqTg/VG5KXCxj6lorbAIYwLIAhDFvkZww9V2kFGMKwAIbdN7z53wydOTctAUMYFsAQhi0Cw3YM+UJ/e8AQhgVVhiTjBoZNUtfQM//QIUPPbLVmQ5Lj7Fm9rWnIVlBbpNKQpOJ7DN9O9984sh5dsiHZTRmZcyfZkCR0ReagKzKM3KOsyPDMbuZzSDYkZ3Y4crhDIIYPl1a7BpWGZLfLS1wxA8GGpG6OLPUQJBv2iWHcQWSSDWnaoWNDTACSDcfkuLO46WrJhjTdKa5DFG1Iht6nqGJEG5IOMa4xFW1Iu4uopka0Ie0uovJ7RRua13JE1LiNbFcQZki3o9c+2tNINyRznVGJhbIN6agm5jGVbWjocWAR2e7CDclBXfajfjHCDele7ZADwQjCDWmeur2vXYx0Q5LvE9GcSjdkx+zUfk4fhBuycyFs7+xJlxzxhnT3nbVZvZGNeEPWYeR3sdaDSgzjpkLiCN275jgEtM5LhgJDduBVznv44EaBITsr6a9jaFXJVmiRhvRkiILe80NIm6PBkO1I/3YnD+lw3T/HlowZZBrSFYxLEGpIf+Cgg4aOky67ZtjYXZRrSPfzdtCQzZ52z9DMb92V7o6hMYPMXe3uGJqEvS52zTB/VB/dY7juGOZMfYfrd8YwZ/p2ivzFr6sakrJrzmeP15PD6ndtz2samkGJWUwySbIYj7f9h0Ews5rzWAAAAAAAAAAAAAAAAAAAAAAAAAAA1+YPAs1M2cNnmvoAAAAASUVORK5CYII="></img> */}
            <h3>The percentage of the amount donated: {parseInt(TheAmountDonated * 100 / theGoal)}%</h3>
            <h3>The number of donors: {TheNumberOfDonors}</h3>
            <h3>Our goal: {fromShekellsToX(theGoal, rate.dollar, rate.currentCoin)}</h3>
        </div>
    </>)
}
export default Goal;