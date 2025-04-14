"use client";
import React, { useState,useEffect } from "react";
import {Box,Stack,Typography,} from "@mui/material";
import {LocalizationProvider,StaticDatePicker,} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button } from "@mui/material";
import { useDemoStore } from "../ZusStand/zustand";
import { useModalStore } from "../ZusStand/zustand";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function CalendarPopup() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const { setSelectedDateTime } = useDemoStore();
  const [timeZone, setTimeZone] = useState("");
 

useEffect(() => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  setTimeZone(userTimeZone);
}, []);


  const allTimeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  ];

  // Function to convert 12-hour format to 24-hour for comparison
  const convertTo24Hour = (time: string): number => {
    const [t, meridian] = time.split(" ");
    let [hours, minutes] = t.split(":").map(Number);
    if (meridian === "PM" && hours !== 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  // Filter slots based on selected date
  const getFilteredSlots = () => {
    const now = new Date();
    const isToday =
      selectedDate.toDateString() === new Date().toDateString();
    if (!isToday) return allTimeSlots;

    const currentTime = now.getHours() * 60 + now.getMinutes();
    return allTimeSlots.filter(
      (slot) => convertTo24Hour(slot) > currentTime
    );
  };

  return (
    <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "1000px",
      height: "500px",
      display: "flex",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(8px)",
    }}
  >
   <IconButton
    onClick={() => useModalStore.getState().setOpen(false)}
    sx={{
      position: "absolute",
      top: 8,
      right: 8,
      color: "red",
      zIndex: 10,
    }}
  >
    <CloseIcon />
  </IconButton>
      {/* Left Panel: Calendar & Time Slots */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "60%",

        }}
      >
        <Box
          sx={{
            fontWeight: "bold",
            color: "black",
            fontSize: "16px",
            textAlign: "center",
            padding: "20px",
          }}
        >
      <Typography variant="h5">Time Zone: {timeZone}</Typography>
        </Box>

        <Stack
          direction="row"
          spacing={4}
          sx={{
            padding: "20px",
            borderRight: "1px solid rgba(255, 255, 255, 0.18)",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* Calendar */}
          <LocalizationProvider dateAdapter={AdapterDateFns}  >
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={selectedDate}
              onChange={(newValue) => {
                if (newValue) setSelectedDate(newValue);
              }}
              shouldDisableDate={(date) => {
                const day = date.getDay();
                const isWeekend = day === 0 || day === 6; // Sunday (0), Saturday (6)
                const isPast = date < new Date().setHours(0, 0, 0, 0); // remove past dates
                return isWeekend || isPast;
              }}
              minDate={new Date()}
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                height: "320px",
                backgroundColor: "#fafafa",
              
                "& .MuiPickersCalendarHeader-root": {
                  color: "#333",
                  fontWeight: "bold",
                },
                "& .MuiSvgIcon-root": {
                  color: "#333",
                },
                "& .MuiPickersDay-root": {
                  color: "#000",
                  fontWeight: "bold",
                  
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                    color: "#000",
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "#143151 !important",
                  color: "#fff !important",
                },
                "& .MuiPickersDay-root.Mui-disabled": {
                  color: "#aaa !important",
                  backgroundColor: "#f0f0f0 !important",
                  pointerEvents: "none",
                },
              }}
              
            />
          </LocalizationProvider>

          {/* Time Slots */}
          <Box
            sx={{
              width: "180px",
              padding: "0.5rem",
              overflowY: "auto",
              maxHeight: "320px",
              display: "flex",
              border: "2px solid black",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)", // optional soft shadow
            }}
          >
            {getFilteredSlots().length ? (
              getFilteredSlots().map((time, idx) => (
                <Button
                key={idx}
                variant="outlined"
                onClick={() => setSelectedTime(time)}
                sx={{
                  color: selectedTime === time ? "#fff" : "#143151",
                  backgroundColor: selectedTime === time ? "#143151" : "#f9f9f9",
                  borderColor: "#143151",
                  borderRadius: "25px",
                  fontWeight: "bold",
                 }}
              >
                {time}
              </Button>
              
              ))
            ) : (
              <Typography>No Time slots available Choose Another date</Typography>
            )}
          </Box>
        </Stack>
      </Box>

      {/* Right Panel: Selected Info */}
      <Stack
  spacing={5}
  sx={{
    width: "40%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "2px solid #143151",
    backgroundColor: "#f9f9f9", // subtle grey
  }}
>
  <Typography variant="h5" fontWeight="bold" color="#333">
    Selected Date & Time
  </Typography>
  <Typography variant="h4" color="#111">
    {selectedDate?.toDateString() || "No date selected"}
  </Typography>
  <Typography variant="h6" color="#111">
    {selectedTime ? `Time: ${selectedTime}` : "No time selected"}
  </Typography>
  <Button
  variant="contained"
  disabled={!selectedDate || !selectedTime}
  onClick={() =>  {
    if (selectedDate && selectedTime) {
      const day = selectedDate.getDate().toString().padStart(2, "0");
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
      const year = selectedDate.getFullYear();
      const formattedDate =`${`${day}/${month}/${year}`} at ${selectedTime}`;
      setSelectedDateTime(formattedDate);
  
    }
    useModalStore.getState().setOpen(false);
   
  }}
>
    Book Demo
  </Button>
</Stack>

    </Box>
  );
}
