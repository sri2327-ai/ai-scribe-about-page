'use client'
import { GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function GlobalCss(...args: []) {
  const theme = useTheme();
  return(
    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0
        },
        body: {
          margin: 0,
          padding: 0,
        },
        h1: {
          fontWeight: 300,
          lineHeight: 1.167,
        },
        h2: {
          fontWeight: 300,
          lineHeight: 1.2,
        },
        h3: {
          fontWeight: 400,
          lineHeight: 1.167,
        },
        h4: {
          fontWeight: 400,
          lineHeight: 1.235,
        },
        h5: {
            fontWeight: 400,
            lineHeight: 1.334,
        },
        h6: {
          fontWeight: 500,
          lineHeight: 1.6,
        },
        // Font size breakpoint based setup
        [theme.breakpoints.up("xs")]: {
          h1: { fontSize: "32px" },
          h2: { fontSize: "28px" },
          h3: { fontSize: "24px" },
          h4: { fontSize: "20px" },
          h5: { fontSize: "16px" },
          h6: { fontSize: "14px" },
        },
        [theme.breakpoints.up("sm")]: {
          h1: { fontSize: "40px" },
          h2: { fontSize: "36px" },
          h3: { fontSize: "30px" },
          h4: { fontSize: "24px" },
          h5: { fontSize: "16px" },
          h6: { fontSize: "14px" },
        },
        [theme.breakpoints.up("md")]: {
          h1: { fontSize: "48px" },
          h2: { fontSize: "40px" },
          h3: { fontSize: "34px" },
          h4: { fontSize: "28px" },
          h5: { fontSize: "18px" },
          h6: { fontSize: "16px" },
        },
        [theme.breakpoints.up("lg")]: {
          h1: { fontSize: "56px" },
          h2: { fontSize: "48px" },
          h3: { fontSize: "40px" },
          h4: { fontSize: "32px" },
          h5: { fontSize: "18px" },
          h6: { fontSize: "16px" },
        },
        [theme.breakpoints.up("xl")]: {
          h1: { fontSize: "64px" },
          h2: { fontSize: "56px" },
          h3: { fontSize: "48px" },
          h4: { fontSize: "40px" },
          h5: { fontSize: "20px" },
          h6: { fontSize: "18px" },
        },
        main: {
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          overflow: "hidden",
          maxWidth: "100%"
        },
        section: {
          display: "flex",
          flexDirection: "column",
          minHeight: "90vh",
          background: theme.palette.background,
          paddingTop: "60px",
          paddingBottom: "60px",
        },
        "section.witSp": {
          [theme.breakpoints.up("xs")]: {
            marginLeft: "20px",
            marginRight: "20px",
          },
          [theme.breakpoints.up("sm")]: {
            marginLeft: "50px",
            marginRight: "50px",
          },
          [theme.breakpoints.up("md")]: {
            marginLeft: "80px",
            marginRight: "80px",
          },
          [theme.breakpoints.up("lg")]: {
            marginLeft: "110px",
            marginRight: "110px",
          },
          [theme.breakpoints.up("xl")]: {
            marginLeft: "140px",
            marginRight: "140px",
          },
        },
        "section.witOutSp": {
          [theme.breakpoints.up("xs")]: {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          [theme.breakpoints.up("sm")]: {
            paddingLeft: "50px",
            paddingRight: "50px",
          },
          [theme.breakpoints.up("md")]: {
            paddingLeft: "80px",
            paddingRight: "80px",
          },
          [theme.breakpoints.up("lg")]: {
            paddingLeft: "110px",
            paddingRight: "110px",
          },
          [theme.breakpoints.up("xl")]: {
            paddingLeft: "140px",
            paddingRight: "140px",
          },
        },
      }}
    />
  )    
}
