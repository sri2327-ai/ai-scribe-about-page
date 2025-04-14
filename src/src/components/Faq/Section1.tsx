'use client'
import { useState } from "react";
import { Typography, Card, CardContent,Box, Tabs, Tab, IconButton, TextField, InputAdornment } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "@/styles/faq.module.scss"

export default function Section1(...args: []) {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(0);
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar
  const theme = useTheme();

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="witOutSp" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.container}>
        {/* Toggle between Search Bar and Header */}
        <div className={styles.searchWrapper}>
  <div className={`${styles.searchBar} ${showSearch ? styles.open : ""}`}>
    <TextField
      fullWidth
      autoFocus={showSearch}
      variant="outlined"
      placeholder="Looking for something?"
      sx={{
        "& .MuiOutlinedInput-root": {
          height: "50px",
          fontSize: "1.1rem",
        },
        "& .MuiInputBase-input": {
          padding: "12px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <IconButton 
            onClick={() => setShowSearch(false)} 
            sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}
          >
            <CloseIcon />
          </IconButton>
        ),
      }}
    />
  </div>

  {!showSearch && (
    <div className={styles.header} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h1" sx={{ textAlign: "center", width: "100%" }}>
        Frequently Asked Questions
      </Typography>
      <IconButton 
        onClick={() => setShowSearch(true)} 
        sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}
      >
        <SearchIcon />
      </IconButton>
    </div>
  )}
</div>


        {/* Tabs Section */}
       
  <Tabs
    className={styles.generalTab}
    value={tabValue}
    onChange={(e, newValue) => setTabValue(newValue)}
    textColor="primary"
    indicatorColor="primary"
  >
    <Tab sx={{ color: "text.disabled" }} label="General" />
    <Tab sx={{ color: "text.disabled" }} label="Setting up FAQs" />
  </Tabs>




        {/* FAQ Items - Using Card Instead of Accordion */}
        {[
          { question: "What is an FAQ section?", answer: "An FAQ section helps quickly answer common questions." },
          { question: "Why do FAQs matter?", answer: "FAQs help customers get answers quickly." },
          { question: "Where can I add my FAQs?", answer: "You can add FAQs on your website's help section." },
        ].map((faq, index) => (
          <div key={index} className={styles.faqCard} onClick={() => handleToggle(index)}>
            <CardContent>
              <Typography
                variant="h4"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                {faq.question}
                <IconButton size="small">
                  <ExpandMoreIcon />
                </IconButton>
              </Typography>

              {/* Expandable Answer Section */}
              {expanded === index && (
                <>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </>
              )}
            </CardContent>
          </div>
        ))}
      </div>
    </section>
  );
};

// 'use client'
// import { useState, useEffect } from "react";
// import { Typography, CardContent, Box, Tabs, Tab, IconButton, TextField, InputAdornment } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
// import styles from "@/styles/faq.module.scss";
// import { PostApi } from "@/app/api/PostApi";
// import { environmentVariables } from "@/app/environmentVariables";

// export default function Section1() {
//   const [tabValue, setTabValue] = useState(0);
//   const [expanded, setExpanded] = useState<number | null>(null);
//   const [showSearch, setShowSearch] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const theme = useTheme();

//   useEffect(() => {
//     console.log("Fetching categories..."); // Debug log
//     const fetchData = async () => {
//       const payload = {
//         OrganizationID: env.ORGANIZATION_ID,
//       };
//       try {
//         const response = await PostApi("getFaqCategoryListV1", "Support", "reqBody", payload);
//         setCategories(response?.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
  
//     fetchData();
//   }, []);  
  

//   useEffect(() => {
//     const fetchFaqData = async () => {
//       try {
//         const response = await PostApi("getFaqList", "Support", "reqBody", {
//           OrganizationID: environmentVariables.ORGANIZATION_ID,
//           categoryArr: [],
//         });
//         setFaqs(response?.data || []);
//       } catch (error) {
//         console.error("Error fetching FAQs:", error);
//       }
//     };
//     fetchFaqData();
//   }, []);

//   const handleToggle = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <section className="witSp" style={{ alignItems: 'center', justifyContent: 'center' }}>
//       <div className={styles.container}>
//         <div className={styles.searchWrapper}>
//           <div className={`${styles.searchBar} ${showSearch ? styles.open : ""}`}> 
//             <TextField
//               fullWidth
//               autoFocus={showSearch}
//               variant="outlined"
//               placeholder="Looking for something?"
//               sx={{ "& .MuiOutlinedInput-root": { height: "50px", fontSize: "1.1rem" }, "& .MuiInputBase-input": { padding: "12px" } }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <IconButton onClick={() => setShowSearch(false)}>
//                     <CloseIcon />
//                   </IconButton>
//                 ),
//               }}
//             />
//           </div>

//           {!showSearch && (
//             <div className={styles.header} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <Typography variant="h1" sx={{ textAlign: "center", width: "100%" }}>Frequently Asked Questions</Typography>
//               <IconButton onClick={() => setShowSearch(true)}>
//                 <SearchIcon />
//               </IconButton>
//             </div>
//           )}
//         </div>

//         <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} textColor="primary" indicatorColor="primary">
//           {categories.map((category, index) => (
//             <Tab key={category.CategoryID} label={category.CategoryName} />
//           ))}
//         </Tabs>

//         {faqs.map((faq, index) => (
//           <div key={index} className={styles.faqCard} onClick={() => handleToggle(index)}>
//             <CardContent>
//               <Typography variant="h4" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 {faq.Question}
//                 <IconButton size="small">
//                   <ExpandMoreIcon />
//                 </IconButton>
//               </Typography>
//               {expanded === index && <p className={styles.faqAnswer}>{faq.Answer}</p>}
//             </CardContent>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

