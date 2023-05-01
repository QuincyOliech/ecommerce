import React from "react";
import booking from "../images/booking2.avif";

const Booking = () => {
  return (
    <div className="flex bg-pattern-triangles-1 flex-col md:flex-row justify-between items-center md:items-start my-10">
      <div className="flex flex-col mx-8 md:mx-28 mt-20 md:mt-0 justify-center items-center md:items-start md:w-1/3 p-4 md:p-10 md:mr-10 sm:text-center md:text-left">
        <h1 className="text-3xl md:text-5xl text-blue-900 font-bold mb-6 ">
          APPOINTMENT
        </h1>
        <h1 className="text-3xl md:text-5xl text-blue-900 font-bolder mb-6 ">
          BOOKING
        </h1>
        <p className="text-m md:text-xl text-gray-500 mb-4 ">
          Get a personalized eyewear fitting by booking an appointment with our
          experts.
        </p>
        <p className="text-m md:text-xl mb-6 text-gray-500  ">
          Please Login to book your appointment today!
        </p>
        <button
          className="bg-yellow-400 hover:bg-blue-900 hover:text-white text-black font-bold rounded-md mt-2 py-2 px-4"
        >
          Login
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <img className="w-4/3" src={booking} alt="booking" />
      </div>
    </div>
  );
};

export default Booking;



// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
// import { AuthContext } from "./AuthContext";
// import { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import booking from "../images/booking2.avif";

// const Booking = ({ profile }) => {
//   const form = useRef();
//   const [phone, setPhone] = useState("");

//   const [date, setDate] = useState(new Date());
//   const handleChange = (date) => setDate(date);

//   const today = new Date();
//   let in3Days = new Date();
//   in3Days.setDate(in3Days.getDate() + 3);

//   const [selectedDate, setSelectedDate] = useState(null);

//   const availableTimes = [
//     "09:00",
//     "09:30",
//     "10:00",
//     "10:30",
//     "11:00",
//     "11:30",
//     "12:00",
//     "12:30",
//     "13:00",
//     "13:30",
//     "14:00",
//     "14:30",
//     "15:00",
//     "15:30",
//     "16:00",
//     "16:30",
//     "17:00",
//   ];
//   const unavailableTimes = [
//     moment("2023-04-18T11:00:00"),
//     moment("2023-04-18T14:30:00"),
//     moment("2023-04-18T15:00:00"),
//   ];
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_cgszw0n",
//         "template_8gvhk6g",
//         form.current,
//         "TNmHmSEVYioQdmA-k"
//       )
//       .then(
//         (result) => {
//           const Toast = Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener("mouseenter", Swal.stopTimer);
//               toast.addEventListener("mouseleave", Swal.resumeTimer);
//             },
//           });
//           Toast.fire({
//             icon: "success",
//             title: "Success!",
//             text: "Message delivered, we will get back to you soon",
//           });
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };

//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//   };

//   const { user, setUser, logout } = useContext(AuthContext);

//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await fetch(`http://127.0.0.1:3000/users/${user.id}`);
//       const data = await response.json();
//       setUser(data);
//       setIsLoading(false);
//     };
//     if (user && !profile) {
//       fetchUser();
//     } else {
//       setIsLoading(false);
//     }
//   }, [setUser, profile]);

//   console.log(user);
//   const isEmpty = (obj) => {
//     return !obj || Object.keys(obj).length === 0;
//   };
//   const isNotEmpty = (obj) => {
//     return obj && Object.keys(obj).length !== 0;
//   };

//   return (
//     <div
//       className="m-10"
//       style={{
//         backgroundImage: `url('images/eyetest.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {!isLoading && user && isEmpty(profile) && (
//         <>
//           <div className="mx-auto p-10 md:w-1/2" style={{ marginTop: "100px" }}>
//             <form
//               className="border-2 rounded-lg shadow-lg p-5 bg-gray-200"
//               ref={form}
//               onSubmit={sendEmail}
//             >
//               <h2 className="text-xl  text-center font-bold mb-4 ">
//                 BOOK EYE TEST
//               </h2>
//               <div className="form-group flex flex-row mb-3 my-2 w-full">
//                 <div className="form-group mb-2 p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="name"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     placeholder="Enter your name"
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     required
//                   />
//                 </div>
//                 <div className=" relative p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="email"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Enter your email address"
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mt-4 relative w-full">
//                 <label className="block font-bold text-sm mb-2">Phone No</label>
//                 <input
//                   onChange={handlePhoneChange}
//                   className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                   name="phone"
//                   placeholder="Enter phone number"
//                   value={phone}
//                   required
//                 />
//               </div>
//               {/* second row */}
//               <div className="form-group flex flex-row mb-3 my-2 w-full">
//                 <div className="form-group mb-2 p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="name"
//                   >
//                     Select Time
//                   </label>
//                   <DatePicker
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     selected={date}
//                     onChange={handleChange}
//                     minDate={today}
//                     maxDate={in3Days}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     excludeTimes={unavailableTimes}
//                     filterTime={(time) => {
//                       const [hour, minute] = time
//                         .toLocaleTimeString("en-US", { hour12: false })
//                         .split(":");
//                       return availableTimes.includes(`${hour}:${minute}`);
//                     }}
//                   />
//                 </div>
//                 <div className=" relative p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="email"
//                   >
//                     Select Branch
//                   </label>
//                   <select
//                     name="branch"
//                     id="branch"
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     required
//                   >
//                     <option value="Kampala">Nairobi</option>
//                     <option value="Mbarara">Kisumu</option>
//                     <option value="Gulu">Eldoret</option>
//                     <option value="Jinja">Kitengela</option>
//                     <option value="Mbale">Kakamega</option>
//                     <option value="Fort Portal">Rwanda</option>
//                     <option value="Masaka">Uganda</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="mt-4 relative w-full">
//                 <label
//                   className="block font-bold text-sm mb-2 "
//                   htmlFor="message"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   placeholder="Enter your message"
//                   className="border border-gray-400 rounded-md px-4 py-2 w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                 />
//               </div>
//               <div className="text-center mt-4">
//                 <button
//                   type="submit"
//                   className="bg-yellow-400 hover:bg-blue-900 hover:text-white text-black font-bold rounded-md mt-2 py-2 px-4"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </>
//       )}
//       {!isLoading && !user && !isNotEmpty(profile) && (
//         <>
//           <div className="flex flex-col md:flex-row justify-between items-center md:items-start my-10">
//             <div className="flex flex-col mx-8 md:mx-28 mt-20 md:mt-0 justify-center items-center md:items-start md:w-1/3 p-4 md:p-10 md:mr-10 sm:text-center md:text-left">
//               <h1 className="text-3xl md:text-5xl text-blue-900 font-bold mb-6 ">
//                 APPOINTMENT
//               </h1>
//               <h1 className="text-3xl md:text-5xl text-blue-900 font-bolder mb-6 ">
//                 BOOKING
//               </h1>
//               <p className="text-m md:text-xl text-gray-500 mb-4 ">
//                 Get a personalized eyewear fitting by booking an appointment
//                 with our experts.
//               </p>
//               <p className="text-m md:text-xl mb-6 text-gray-500  ">
//                 Please Login to book your appointment today!
//               </p>
//               <Link
//                 to="/login"
//                 className="bg-yellow-400 hover:bg-blue-900 hover:text-white text-black font-bold rounded-md mt-2 py-2 px-4"
//               >
//                 Login
//               </Link>
//             </div>

//             <div className="w-full md:w-1/2">
//               <img className="w-4/3" src={booking} alt="booking" />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// export default Booking;
// import React from 'react';

// function Booking() {
//   return (
//     <div className="">
//       <svg className="w-full h-full mt-10">
//         <circle cx="100" cy="100" r="40" fill="#1D4ED8" />
//         <circle cx="80" cy="80" r="30" fill="#FBBF24" />
//         <circle cx="120" cy="120" r="30" fill="#1D4ED8" />
//         <circle cx="160" cy="80" r="30" fill="#FBBF24" />
//         <circle cx="200" cy="40" r="30" fill="#1D4ED8" />
//         <circle cx="240" cy="120" r="30" fill="#FBBF24" />
//       </svg>
//       <div className="max-w-md mx-auto px-4 py-8">
//         {/* Your form elements go here */}
//       </div>
//     </div>
//   );
// }

// export default Booking;

// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
// import { AuthContext } from "./AuthContext";
// import { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import booking from "../images/booking2.avif";

// const Booking = ({ profile }) => {
//   const form = useRef();
//   const [phone, setPhone] = useState("");
//   const [date, setDate] = useState(new Date());
//   const handleChange = (date) => setDate(date);
//   const today = new Date();
//   let in3Days = new Date();
//   in3Days.setDate(in3Days.getDate() + 3);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const availableTimes = [
//     "09:00",
//     "09:30",
//     "10:00",
//     "10:30",
//     "11:00",
//     "11:30",
//     "12:00",
//     "12:30",
//     "13:00",
//     "13:30",
//     "14:00",
//     "14:30",
//     "15:00",
//     "15:30",
//     "16:00",
//     "16:30",
//     "17:00",
//   ];
//   const unavailableTimes = [
//     moment("2023-04-18T11:00:00"),
//     moment("2023-04-18T14:30:00"),
//     moment("2023-04-18T15:00:00"),
//   ];
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_cgszw0n",
//         "template_8gvhk6g",
//         form.current,
//         "TNmHmSEVYioQdmA-k"
//       )
//       .then(
//         (result) => {
//           const Toast = Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener("mouseenter", Swal.stopTimer);
//               toast.addEventListener("mouseleave", Swal.resumeTimer);
//             },
//           });
//           Toast.fire({
//             icon: "success",
//             title: "Success!",
//             text: "Message delivered, we will get back to you soon",
//           });
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };
//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//   };
//   const { user, setUser, logout } = useContext(AuthContext);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchUser = async () => {
//       const response = await fetch(`http://127.0.0.1:3000/users/${user.id}`);
//       const data = await response.json();
//       setUser(data);
//       setIsLoading(false);
//     };
//     if (user && !profile) {
//       fetchUser();
//     } else {
//       setIsLoading(false);
//     }
//   }, [setUser, profile]);
//   console.log(user);
//   const isEmpty = (obj) => {
//     return !obj || Object.keys(obj).length === 0;
//   };
//   const isNotEmpty = (obj) => {
//     return obj && Object.keys(obj).length !== 0;
//   };
//   return (
//     <div
//       className="m-10"
//       style={{
//         backgroundImage: `url('images/eyetest.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {!isLoading && user && isEmpty(profile) && (
//         <>
//           <div className="mx-auto p-10 md:w-1/2" style={{ marginTop: "100px" }}>
//             <form
//               className="border-2 rounded-lg shadow-lg p-5 bg-gray-200"
//               ref={form}
//               onSubmit={sendEmail}
//             >
//               <h2 className="text-xl  text-center font-bold mb-4 ">
//                 BOOK EYE TEST
//               </h2>
//               <div className="form-group flex flex-row mb-3 my-2 w-full">
//                 <div className="form-group mb-2 p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="name"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     placeholder="Enter your name"
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     required
//                   />
//                 </div>
//                 <div className=" relative p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="email"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Enter your email address"
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mt-4 relative w-full">
//                 <label className="block font-bold text-sm mb-2">Phone No</label>
//                 <input
//                   onChange={handlePhoneChange}
//                   className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                   name="phone"
//                   placeholder="Enter phone number"
//                   value={phone}
//                   required
//                 />
//               </div>
//               {/* second row */}
//               <div className="form-group flex flex-row mb-3 my-2 w-full">
//                 <div className="form-group mb-2 p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="name"
//                   >
//                     Select Time
//                   </label>
//                   <DatePicker
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     selected={date}
//                     onChange={handleChange}
//                     minDate={today}
//                     maxDate={in3Days}
//                     showTimeSelect
//                     dateFormat="MMMM d, yyyy h:mm aa"
//                     excludeTimes={unavailableTimes}
//                     filterTime={(time) => {
//                       const [hour, minute] = time
//                         .toLocaleTimeString("en-US", { hour12: false })
//                         .split(":");
//                       return availableTimes.includes(`${hour}:${minute}`);
//                     }}
//                   />
//                 </div>
//                 <div className=" relative p-1 w-1/2">
//                   <label
//                     className="block font-bold text-sm mb-2 "
//                     htmlFor="email"
//                   >
//                     Select Branch
//                   </label>
//                   <select
//                     name="branch"
//                     id="branch"
//                     className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                     required
//                   >
//                     <option value="Kampala">Nairobi</option>
//                     <option value="Mbarara">Kisumu</option>
//                     <option value="Gulu">Eldoret</option>
//                     <option value="Jinja">Kitengela</option>
//                     <option value="Mbale">Kakamega</option>
//                     <option value="Fort Portal">Rwanda</option>
//                     <option value="Masaka">Uganda</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="mt-4 relative w-full">
//                 <label
//                   className="block font-bold text-sm mb-2 "
//                   htmlFor="message"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   placeholder="Enter your message"
//                   className="border border-gray-400 rounded-md px-4 py-2 w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
//                 />
//               </div>
//               <div className="text-center mt-4">
//                 <button
//                   type="submit"
//                   className="bg-yellow-400 hover:bg-blue-900 hover:text-white text-black font-bold rounded-md mt-2 py-2 px-4"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </>
//       )}
//       {!isLoading && !user && !isNotEmpty(profile) && (
//         <>
//           <div className="flex flex-col md:flex-row justify-between items-center md:items-start my-10">
//             <div className="flex flex-col mx-8 md:mx-28 mt-20 md:mt-0 justify-center items-center md:items-start md:w-1/3 p-4 md:p-10 md:mr-10 sm:text-center md:text-left">
//               <h1 className="text-3xl md:text-5xl text-blue-900 font-bold mb-6 ">
//                 APPOINTMENT
//               </h1>
//               <h1 className="text-3xl md:text-5xl text-blue-900 font-bolder mb-6 ">
//                 BOOKING
//               </h1>
//               <p className="text-m md:text-xl text-gray-500 mb-4 ">
//                 Get a personalized eyewear fitting by booking an appointment
//                 with our experts.
//               </p>
//               <p className="text-m md:text-xl mb-6 text-gray-500  ">
//                 Please Login to book your appointment today!
//               </p>
//               <Link
//                 to="/login"
//                 className="bg-yellow-400 hover:bg-blue-900 hover:text-white text-black font-bold rounded-md mt-2 py-2 px-4"
//               >
//                 Login
//               </Link>
//             </div>
//             <div className="w-full md:w-1/2">
//               <img className="w-4/3" src={booking} alt="booking" />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// export default Booking;


