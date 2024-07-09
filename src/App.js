
import { BrowserRouter, Route, Routes, Link, Form } from 'react-router-dom';
import Donations from './Donations';
import Donate from './Donate';
import Navbar from './Navbar';
import Home from './Home';
import OneContribution from './OneContribution';
import "./Navbar.css";
import MyForm from './MyForm.js';
import { useEffect, useState, useContext } from 'react';
import { set } from 'react-hook-form';
import { LineAxisOutlined, Phone } from '@mui/icons-material';
import MyColorContext from './Context';
import axios from 'axios';
import MyRateContext from './RateContext';
function App({ children }) {
  let [arrDonations, setArrDonations] = useState([{
    name: "Chaya",
    donationAmount: 3000,
    deditation: "with love",
    date: new Date()
  }
    ,
  {
    name: "Chavi",
    donationAmount: 600,
    deditation: "ברכה והצלחה",
    date: new Date()
  },
  {
    name: "Ruthi",
    donationAmount: 250,
    deditation: "Thank you",
    date: new Date()
  },
  {
    name: "Shaina",
    donationAmount: 1000,
    deditation: "From  heart",
    date: new Date()
  }, {
    name: "Yossy",
    donationAmount: 900,
    deditation: "Keep on going",
    date: new Date()
  },
  {
    name: "Nachman",
    donationAmount: 3000,
    deditation: "Brocho vehazlocho",
    date: new Date()
  }
    , {
    name: "Miri",
    donationAmount: 3000,
    deditation: "Keep on going",
    date: new Date()
  }

  ]);
  function addContribution(don) {
    let arr = [don, ...arrDonations];
    const sortedArray = arr.slice().sort((a, b) => a.name.localeCompare(b.name));
    setArrDonations(arr);
    console.log(arrDonations.keys);
  }

  const [borderColor, setBorderColor] = useState(" rgb(250, 195, 77)");

  const changeColor = (newColor) => {
    setBorderColor(newColor);
  };

  let [rate, setRate] = useState({
    dollar: null, currentCoin: "shekel"
  })
  
  const changeCoin = () => {
    setRate({
      ...rate,
      currentCoin: rate.currentCoin == "dollar" ? "shekel" :
        "dollar"
    })
    
  }
  useEffect(() => {
    axios.get('https://v6.exchangerate-api.com/v6/81686204de94005151a6d844/latest/USD').then(res=> {
      console.log("wow");
      console.log(rate.dollar);
      setRate({
        ...rate,
        dollar: res.data.conversion_rates.ILS
      });
    }).catch(err => {
      //הודעה מתאימה אא להביא מהשרת...
      console.log("Error fetching exchange rate:", err);
    })
  }, [])
  // .catch(err => {
  //   console.error("Error fetching exchange rate:", err);
  // })

  return (<>
    <MyRateContext.Provider value={rate}>
    <MyColorContext.Provider value={{ borderColor, changeColor }}>
    <div style={{ backgroundColor: borderColor }}>
    <Navbar changeCoin={changeCoin } />
    </div>
      <Routes>
        <Route path="/Donations" element={<Donations arrDonations={arrDonations} />} />
        <Route path="/Donate" element={<Donate addContribution={addContribution} />} />
        <Route path="/Home" element={<Home arrDonations={arrDonations} />} />
        <Route path="/" element={<Home arrDonations={arrDonations} />} />
      </Routes>
      </MyColorContext.Provider>
      </MyRateContext.Provider>
  </>
  );
}
export default App;
