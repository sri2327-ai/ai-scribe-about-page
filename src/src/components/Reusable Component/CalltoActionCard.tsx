// import { Box, Typography,Stack } from "@mui/material";
// import Image from "next/image";

// const CalltoActionCard = ({ title,children }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start", // Left-align content
//         justifyContent: "space-between",
//         borderRadius: "20px",
//         overflow: "hidden",
//         background: "radial-gradient(circle at right, #4AC2E8 30%, #0D252B 100%)",
//         padding: "20px",
//         position: "relative",
//         color: "#fff",
//         height: "200px",
//         width: "100%", // Ensure full width
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       {/* Background Image */}
//       <Image
//         src="/Vector.png" // Make sure the path is correct
//         alt="Background"
//         layout="fill"
//         objectFit="fill"
//         quality={100}
//         style={{ opacity: 1 }}
//       />

//       {/* Content Slot for Custom Text & Buttons */}
//       <Box sx={{ zIndex: 1, maxWidth: "100%", textAlign: "left"}}>
//       <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//         {title}
//       </Typography>

//       <Stack spacing={2} direction="row">
//     {children}
//       </Stack>

//       </Box>
//     </Box>
//   );
// };

// export default CalltoActionCard;


import { Description } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

const CalltoActionCard = ({ title, children,description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Left-align content
        justifyContent: "space-between",
        borderRadius: "20px",
        overflow: "hidden",
        background: "radial-gradient(circle at right, #4AC2E8 30%, #0D252B 100%)",
        padding: "20px",
        position: "relative",
        color: "#fff",
        height: "300px",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Background Image */}
      <Image
        src="/Vector.png"
        alt="Background"
        layout="fill"
        objectFit="fill"
        quality={100}
        style={{ opacity: 0.5 }}
      />

      {/* Content Box (To Keep Space Between Text and Button) */}
      <Box sx={{ zIndex: 1, maxWidth: "100%", textAlign: "left", display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
  {title} 
  </Typography>
  <p style={{ margin: "8px 0" }}>
    {description}
  </p>

        <Box sx={{ flexGrow: 1 }} />
        <Stack spacing={2} direction="row">
          {children}
        </Stack>
      </Box>
    </Box>
  );
};

export default CalltoActionCard;
