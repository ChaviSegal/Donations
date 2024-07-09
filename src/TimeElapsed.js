// import React, { useEffect, useState } from 'react';

// const TimeElapsed = ({ donationDate }) => {
//   const [timeElapsed, setTimeElapsed] = useState('');

//   useEffect(() => {
//     const calculateTimeElapsed = () => {
//       try {
//         const now = new Date();
//         const donationTime = new Date(donationDate);

//         const difference = now - donationTime;

//         const seconds = Math.floor(difference / 1000);
//         const minutes = Math.floor(seconds / 60);
//         const remainingSeconds = seconds % 60;
//         const hours = Math.floor(minutes / 60);
//         const remainingMinutes = minutes % 60;
//         const days = Math.floor(hours / 24);
//         const remainingHours = hours % 24;
//         const months = Math.floor(days / 30);
//         const remainingDays = days % 30;
//         const years = Math.floor(months / 12);

//         if (seconds < 60) {
//             setTimeElapsed(`${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`);
//           } else if (minutes < 60) {
//             setTimeElapsed(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'} and ${remainingSeconds} ${remainingSeconds === 1 ? 'second' : 'seconds'} ago`);
//           } else if (hours < 24) {
//             setTimeElapsed(`${hours} ${hours === 1 ? 'hour' : 'hours'} and ${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'} ago`);
//           } else if (months < 12) {
//             setTimeElapsed(`${months} ${months === 1 ? 'month' : 'months'}, ${remainingDays} ${remainingDays === 1 ? 'day' : 'days'}, ${remainingHours} ${remainingHours === 1 ? 'hour' : 'hours'} and ${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'} ago`);
//           } else {
//             setTimeElapsed(`${years} ${years === 1 ? 'year' : 'years'} ago`);
//           }
//       } catch (error) {
//         console.error('Error calculating time elapsed:', error);
//       }
//     };

//     calculateTimeElapsed();
//   }, [donationDate]);

//   return <span>{timeElapsed.seconds}</span>;
// };

// export default TimeElapsed;