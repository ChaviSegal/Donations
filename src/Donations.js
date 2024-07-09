import React, { useState, useContext, useEffect } from "react";
import OneContribution from "./OneContribution";
import MyColorContext from "./Context";
import Button from "@mui/material/Button";
import DonationItem from "./DonationItem";
import { useMemo } from "react";


const Donations = ({ arrDonations }) => {
   const [searchInput, setSearchInput] = useState("");
   const [sortType, setSortType] = useState(null);
   const { borderColor, setBorderColor } = useContext(MyColorContext);

   // מיון התרומות
   const sortedDonations = useMemo(() => {
      if (sortType === "amount") {
         return [...arrDonations].sort((a, b) => b.donationAmount - a.donationAmount);
      } else if (sortType === "amount desc") {
         return [...arrDonations].sort((a, b) => a.donationAmount - b.donationAmount);
      } else if (sortType === "latest") {
         return [...arrDonations].sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
         return arrDonations;
      }
   }, [arrDonations, sortType]);





   // סינון לפי שם תורם או הקדשה
   const filteredDonations = useMemo(() => {
      if (searchInput.trim() === "") {
         return sortedDonations;  // השינוי כאן - סינון מתוך המיון
      }

      return sortedDonations.filter(
         (donation) =>
            donation.name?.includes(searchInput) ||
            donation.deditation?.includes(searchInput)
      );
   }, [sortedDonations, searchInput]);

   // תלות עקבית לא נדרשת כאן, כלומר לא עוברים על פעם אחת בלבד

   return (
      <>

         <div className="Donations">
            <div>
               <div style={{ backgroundColor: borderColor }}>
               </div>
            </div>
            <div>
               <div className="allSearches">
                  < div className="search">
                     <div className="sort-options">
                        <input
                           className="searchInput"
                           type="text"
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button variant="contained" onClick={() => setSortType("amount")}>Sort by Amount</Button>
                        <Button variant="contained" onClick={() => setSortType("amount desc")}>Sort by Amount (Desc)</Button>
                        <Button variant="contained" onClick={() => setSortType("latest")}>Sort by Latest</Button>
                     </div>
                  </div>
               </div>
               <div className="please">
                  {searchInput.trim() !== "" ? (
                     filteredDonations.length > 0 ? (
                        filteredDonations.map((contribution) => (
                           <h3 key={contribution.name}>
                              <div className="donationDetales">
                                 <OneContribution contribution={contribution} />
                                 <p className="donationDate">
                                 Donated: <DonationItem donationDate={contribution.date} />
                                 </p>
                              </div>
                           </h3>
                        ))
                     ) : (
                        <p>No donation found for {searchInput}</p>
                     )
                  ) : (
                     sortedDonations.map((contribution, index) => (
                        <h3 key={contribution.name}>
                           <div className="donationDetales">
                              <OneContribution contribution={contribution} />
                              <p className="donationDate">
                              Donated: <DonationItem donationDate={contribution.date} />
                              </p>
                           </div>
                        </h3>
                     ))
                  )}
               </div>
            </div>
         </div>

      </>
   );
};

export default Donations;





