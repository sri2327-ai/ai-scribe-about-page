// "use client"
// import React, { useState,useRef,useEffect } from "react";
// import Image from "next/image";
// import { Box, Stack, TextField,IconButton, MenuItem, Button,Typography, FormControl, InputLabel, Select, FormHelperText } from "@mui/material";
// import { PopupModal } from 'react-calendly';



// export default function DemoRequestForm () {
// <PopupModal
// url="https://calendly.com/your-schedule-link"
// rootElement={document.getElementById("root")}
// text="Schedule Demo"
// pageSettings={{
//   backgroundColor: 'ffffff',
//   hideEventTypeDetails: false,
//   hideLandingPageDetails: false,
//   primaryColor: '00a2ff',
//   textColor: '4d5055'
// }}
// />

//    const [selectedTime, setSelectedTime] = useState<string | null>(null);
//    const [openCalendly, setOpenCalendly] = React.useState(false);

//    const rootRef = useRef<HTMLDivElement | null>(null);
//    const [showCalendly, setShowCalendly] = useState(false);
//    const [isReady, setIsReady] = useState(false);
 
//    // Ensure rootRef is attached to the DOM before rendering the popup
//    useEffect(() => {
//      if (rootRef.current) {
//        setIsReady(true);
//      }
//    }, [rootRef]);
//    const [formData, setFormData] = useState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       requirements: "",
//       date: "",
//       time: "",
//     });
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("Form Data:", formData);
//     };
//   return (
//     <Box sx={{ backgroundColor: "#C9E3EC", padding: "50px" }}>
//       <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
        
//         {/* Left Section with Images and Text */}
//         <Stack spacing={2} flex={1}>
//   <Typography variant="h4" fontWeight="bold">
//     Request a Demo – See S10.AI in Action!
//   </Typography>
//   <Typography variant="h6">
//     Join 1,000+ Providers Using AI to Save Time & Enhance Care.
//   </Typography>

// <Stack
//   direction="row"
//   spacing={6} // Reduce spacing to bring images closer
//   justifyContent="center"
//   alignItems="flex-end" // Align images to the bottom
//   sx={{ display: { xs: "none", sm: "flex" } }}
// >
//   {/* First Image - Aligned at Bottom */}
//   <Box sx={{ mb: 3,textAlign: "center", display: { xs: "none", sm: "block" } }}>
//     <Image
//       src="/Humera.jpeg"
//       alt="Dr. Humera Naqvi"
//       width={210}
//       height={310} // Medium height
//       style={{ borderRadius: "15px", objectFit: "cover" }}
//     />
//     <Typography fontWeight="bold">Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy</Typography>
//     <p>With S10.AI, I focus on patients, not clerical tasks afterward.</p>
//   </Box>

//   {/* Second Image - Centered Vertically */}
//   <Box sx={{ alignSelf: "center",textAlign: "center", display: { xs: "none", sm: "block" } }}> 
//     <Image
//       src="/Dr-Lisbeth-Roy.png"
//       alt="Dr. Lisbeth Roy"
//       width={180}
//       height={200} // Smaller height
//       style={{ borderRadius: "15px", objectFit: "cover" }}
//     />
//     <Typography fontWeight="bold">Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio</Typography>
//     <p>S10.AI is effortless, customizable, and exceeds expectations every time!</p>
//   </Box>

//   {/* Third Image - Aligned at Bottom */}
//   <Box sx={{ mb: 3, textAlign: "center",display: { xs: "none", sm: "block" } }}> 
//     <Image
//       src="/Willem.jpeg"
//       alt="Dr. Willem Gielen"
//       width={210}
//       height={350} // Larger than first
//       style={{ borderRadius: "15px", objectFit: "cover" }}
//     />
//     <Typography fontWeight="bold">Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik</Typography>
//     <p>I’ve tried them all—S10.AI is hands down the best AI assistant</p>
//   </Box>
// </Stack>


// </Stack>


//         {/* Right Section with Form */}
//          <Box
//       sx={{
//         backgroundColor: "#fff",
//         padding: "30px",
//         borderRadius: "8px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//         maxWidth: "500px", // Reduced width
//         margin: "auto", // Centers the form
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={2}>
//           {/* First Name & Last Name */}
//           <Stack direction="row" spacing={2}>
//             <TextField
//               fullWidth
//               label="First Name *"
//               name="firstName"
//               variant="outlined"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               InputLabelProps={{ style: { color: "black" } }}
//             />
//             <TextField
//               fullWidth
//               label="Last Name"
//               name="lastName"
//               variant="outlined"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               InputLabelProps={{ style: { color: "black" } }}
//             />
//           </Stack>

//           {/* Email & Phone */}
//           <Stack direction="row" spacing={2}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               variant="outlined"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               InputLabelProps={{ style: { color: "black" } }}
//             />
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               type="tel"
//               variant="outlined"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               InputLabelProps={{ style: { color: "black" } }}
//             />
//           </Stack>

//           {/* Requirements Dropdown */}
//           <FormControl fullWidth required>
//             <InputLabel sx={{ color: "black" }}>Requirements</InputLabel>
//             <Select
//               name="requirements"
//               value={formData.requirements}
//               onChange={handleChange}
//               displayEmpty
//             >
              
//               <MenuItem value="Option1">Option 1</MenuItem>
//               <MenuItem value="Option2">Option 2</MenuItem>
//             </Select>
//             <FormHelperText>Choose your requirement</FormHelperText>
//           </FormControl>

//           {/* Date & Time */}
//           {/* <TextField
//             fullWidth
//             label="Date picker"
//             name="date"
//             type="date"
//             variant="outlined"
//             value={formData.date}
//             onClick={() => setOpenCalendly(true)}
//             InputProps={{ readOnly: true }}
//             required
//             InputLabelProps={{ shrink: true, sx: { color: "black" } }}
//           /> */}
//            <TextField
//             fullWidth
//             label="Pick Date & Time"
//             value=""
//             onClick={() => setShowCalendly(true)}
//             InputProps={{ readOnly: true }}
//           />
 

//           <TextField
//             fullWidth
//             label="Time"
//             name="time"
//             type="time"
//             variant="outlined"
//             value={formData.time}
//             onChange={handleChange}
//             required
//             InputLabelProps={{ shrink: true, sx: { color: "black" } }}
//           />

//           {/* Submit Button */}
//           <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <Button type="submit" variant="contained" sx={{ fontWeight: "bold" }}>
//               Submit
//             </Button>
//           </Box>
//         </Stack>
//       </form>
//       {isReady && showCalendly && (
//         <PopupModal
//           url="https://calendly.com/your-schedule-link" // Replace with your actual Calendly link
//           onModalClose={() => setShowCalendly(false)}
//           open={true}
//           rootElement={rootRef.current!}
//         />
//       )}
//     </Box>

//       </Stack>
//     </Box>
//   );
// }


// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import {
//   Box,
//   Stack,
//   TextField,
//   IconButton,
//   MenuItem,
//   Button,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   FormHelperText,
// } from "@mui/material";
// import { PopupModal } from "react-calendly";

// export default function DemoRequestForm() {
//   const rootRef = useRef<HTMLDivElement | null>(null);
//   const [showCalendly, setShowCalendly] = useState(false);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (rootRef.current) {
//       setIsReady(true);
//     }
//   }, []);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     requirements: "",
//     date: "",
//     time: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
//     const { name, value } = e.target;
//     if (name) {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <Box sx={{ backgroundColor: "#C9E3EC", padding: "50px" }} ref={rootRef}>
//       <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
//         {/* Left Section with Images and Text */}
//         <Stack spacing={2} flex={1}>
//           <Typography variant="h4" fontWeight="bold">
//             Request a Demo – See S10.AI in Action!
//           </Typography>
//           <Typography variant="h6">
//             Join 1,000+ Providers Using AI to Save Time & Enhance Care.
//           </Typography>

//           <Stack direction="row" spacing={6} justifyContent="center" alignItems="flex-end" sx={{ display: { xs: "none", sm: "flex" } }}>
//             {/* Image 1 */}
//             <Box sx={{ mb: 3, textAlign: "center" }}>
//               <Image src="/Humera.jpeg" alt="Dr. Humera Naqvi" width={210} height={310} style={{ borderRadius: "15px", objectFit: "cover" }} />
//               <Typography fontWeight="bold">Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy</Typography>
//               <p>With S10.AI, I focus on patients, not clerical tasks afterward.</p>
//             </Box>

//             {/* Image 2 */}
//             <Box sx={{ alignSelf: "center", textAlign: "center" }}>
//               <Image src="/Dr-Lisbeth-Roy.png" alt="Dr. Lisbeth Roy" width={180} height={200} style={{ borderRadius: "15px", objectFit: "cover" }} />
//               <Typography fontWeight="bold">Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio</Typography>
//               <p>S10.AI is effortless, customizable, and exceeds expectations every time!</p>
//             </Box>

//             {/* Image 3 */}
//             <Box sx={{ mb: 3, textAlign: "center" }}>
//               <Image src="/Willem.jpeg" alt="Dr. Willem Gielen" width={210} height={350} style={{ borderRadius: "15px", objectFit: "cover" }} />
//               <Typography fontWeight="bold">Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik</Typography>
//               <p>I’ve tried them all—S10.AI is hands down the best AI assistant</p>
//             </Box>
//           </Stack>
//         </Stack>

//         {/* Right Section with Form */}
//         <Box
//           sx={{
//             backgroundColor: "#fff",
//             padding: "30px",
//             borderRadius: "8px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             maxWidth: "500px",
//             margin: "auto",
//           }}
//         >
//           <form onSubmit={handleSubmit}>
//             <Stack spacing={2}>
//               <Stack direction="row" spacing={2}>
//                 <TextField
//                   fullWidth
//                   label="First Name *"
//                   name="firstName"
//                   variant="outlined"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                   InputLabelProps={{ style: { color: "black" } }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Last Name"
//                   name="lastName"
//                   variant="outlined"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                   InputLabelProps={{ style: { color: "black" } }}
//                 />
//               </Stack>

//               <Stack direction="row" spacing={2}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   type="email"
//                   variant="outlined"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   InputLabelProps={{ style: { color: "black" } }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Phone"
//                   name="phone"
//                   type="tel"
//                   variant="outlined"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   InputLabelProps={{ style: { color: "black" } }}
//                 />
//               </Stack>

//               <FormControl fullWidth required>
//                 <InputLabel sx={{ color: "black" }}>Requirements</InputLabel>
//                 <Select name="requirements" value={formData.requirements} onChange={handleChange}>
//                   <MenuItem value="Option1">Option 1</MenuItem>
//                   <MenuItem value="Option2">Option 2</MenuItem>
//                 </Select>
//                 <FormHelperText>Choose your requirement</FormHelperText>
//               </FormControl>

//               {/* Date & Time */}
//               <TextField
//                 fullWidth
//                 label="Pick Date & Time"
//                 value=""
//                 onClick={() => setShowCalendly(true)}
//                 InputProps={{ readOnly: true }}
//               />

//               <TextField
//                 fullWidth
//                 label="Time"
//                 name="time"
//                 type="time"
//                 variant="outlined"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//                 InputLabelProps={{ shrink: true, sx: { color: "black" } }}
//               />

//               <Box sx={{ display: "flex", justifyContent: "center" }}>
//                 <Button type="submit" variant="contained" sx={{ fontWeight: "bold" }}>
//                   Submit
//                 </Button>
//               </Box>
//             </Stack>
//           </form>

//           {/* Calendly Modal */}
//           {isReady && showCalendly && rootRef.current && (
//             <PopupModal
//               url="https://calendly.com/your-schedule-link"
//               onModalClose={() => setShowCalendly(false)}
//               open={true}
//               rootElement={rootRef.current}
//             />
//           )}
//         </Box>
//       </Stack>
//     </Box>
//   );
// }

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Stack,
  TextField,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Modal,
} from "@mui/material";
import {
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import styles from "@/styles/contactus.module.scss";
import CalendarPopup from "./calendarpopup";
import { Button } from "@mui/material";
import { useDemoStore } from "../ZusStand/zustand";
import { useModalStore } from "../ZusStand/zustand";  

export default function DemoRequestForm() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { open, setOpen } = useModalStore();
  const [isReady, setIsReady] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const { selectedDateTime, setSelectedDateTime } = useDemoStore();
  useEffect(() => {
    if (rootRef.current) {
      setIsReady(true);
    }

    const handleMessage = (event: any) => {
      if (event?.data?.event === "calendly.event_scheduled") {
        const date = new Date();
        setSelectedSlot(date.toLocaleString());
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Box sx={{ backgroundColor: "#C9E3EC", padding: "50px" }} ref={rootRef}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
        {/* Left: Testimonials */}
        <Stack spacing={2} flex={1}>
          <Typography variant="h4" fontWeight="bold">
            Request a Demo – See S10.AI in Action!
          </Typography>
          <Typography variant="h6">
            Join 1,000+ Providers Using AI to Save Time & Enhance Care.
          </Typography>

          <Stack direction="row" spacing={6} justifyContent="center" alignItems="flex-end" sx={{ display: { xs: "none", sm: "flex" } }}>
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <Image src="/Humera.jpeg" alt="Dr. Humera Naqvi" width={210} height={310} style={{ borderRadius: "15px", objectFit: "cover" }} />
              <p>With S10.AI, I focus on patients, not clerical tasks afterward.</p>
              <Typography fontWeight="bold">Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy</Typography>
            </Box>
            <Box sx={{ alignSelf: "center", textAlign: "center" }}>
              <Image src="/Dr-Lisbeth-Roy.png" alt="Dr. Lisbeth Roy" width={180} height={200} style={{ borderRadius: "15px", objectFit: "cover" }} />
              <p>S10.AI is effortless, customizable, and exceeds expectations every time!</p>
              <Typography fontWeight="bold">Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio</Typography>
            </Box>
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <Image src="/Willem.jpeg" alt="Dr. Willem Gielen" width={210} height={350} style={{ borderRadius: "15px", objectFit: "cover" }} />
             <p>I’ve tried them all—S10.AI is hands down the best AI assistant</p>
             <Typography fontWeight="bold">Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik</Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Right: Form */}
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            maxWidth: "500px",
            margin: "auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "black" } }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "black" } }}
                />
              </Stack>

              <Stack direction="row" spacing={2}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "black" } }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  type="tel"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: "black" } }}
                />
              </Stack>

              <FormControl fullWidth required>
                <InputLabel sx={{ color: "black" }}  variant="outlined">Requirements</InputLabel>
                <Select name="requirements" value={formData.requirements} onChange={handleChange}>
                  <MenuItem value="Option1">Option 1</MenuItem>
                  <MenuItem value="Option2">Option 2</MenuItem>
                </Select>
                <FormHelperText>Choose your requirement</FormHelperText>
              </FormControl>

               <TextField
                  fullWidth
                  label="Pick Date & Time"
                  name="Pick Date & Time"
                  variant="outlined"
                  value={selectedDateTime}
                  onClick={() => setOpen(true)}
                  required
                  InputLabelProps={{ style: { color: "black" } }}
                />

                <FormControl fullWidth required>
                <InputLabel sx={{ color: "black" }}  variant="outlined">How did You hear about this?</InputLabel>
                <Select name="requirements" value={formData.requirements} onChange={handleChange}>
                  <MenuItem value="Option1">Option 1</MenuItem>
                  <MenuItem value="Option2">Option 2</MenuItem>
                </Select>
                <FormHelperText>Choose your requirement</FormHelperText>
              </FormControl>



              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained" sx={{ fontWeight: "bold" }}>
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Stack>

      {/* Custom Calendly Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
  <CalendarPopup/>
</Modal>




    </Box>
  );
}
