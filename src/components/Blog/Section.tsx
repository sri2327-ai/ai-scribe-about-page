"use client";
import React, { useState,useRef,useEffect } from "react";
import styles from "@/styles/blog.module.scss";
import { Typography, Tabs, Tab} from "@mui/material";
import { useRouter } from "next/navigation";

const articles = [
  { folder: "medical-scribe-robots-and-digitalization-of-health-records", image: "/Real-Life-Scenario.webp", title: "Medical Scribe Robots And Digitalization Of Health Records (6 Sources Of ROI)", description: "Medical scribe robots and digitalization of health records can provide faster diagnosis and treatment, more accurate data, and better patient outcomes.Medical scribes are a key part of the medical community..." },
  { id: 2, image: "/ImprovePatientCare.webp", title: "Nuances In Medical Scribing : 6 Practical Tips To Make It Work", description: "Medical scribes are a key part of the medical community." },
  { id: 3, image: "/Psychotherapy-Documentation.png", title: "Is Technology Disrupting Medic Scribe Industry?", description: "The medical scribe industry is facing a new wave of competition." },
  { id: 4, image: "/Psychotherapy-Documentation.png", title: "Is Technology Disrupting Medic Scribe Industry?", description: "With tools like Alexa, Cortana, and Siri, the scribes are being phased out." },
  { id: 5, image: "/Real-Life-Scenario.webp", title: "Medical Scribe Robots And Digitalization Of Health Records (6 Sources Of ROI)", description: "Medical scribe robots provide faster diagnosis and better outcomes." },
  { id: 6, image: "/ImprovePatientCare.webp", title: "Nuances In Medical Scribing : 6 Practical Tips To Make It Work", description: "Medical scribes are a key part of the medical community." },
  { id: 7, image: "/Psychotherapy-Documentation.png", title: "Is Technology Disrupting Medic Scribe Industry?", description: "The medical scribe industry is facing a new wave of competitio." },
  { id: 8, image: "/Psychotherapy-Documentation.png", title: "Is Technology Disrupting Medic Scribe Industry?", description: "With tools like Alexa, Cortana, and Siri, the scribes are being phased out." }
];

// Number of articles per page
const itemsPerPage = 6;

const BlogCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const [tabValue, setTabValue] = useState(0);
  const router = useRouter();
  const [tabValueSecond, setTabValueSecond] = useState(0);
  // Get current page data
  const paginatedArticles = articles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };



  const [progressLeft, setProgressLeft] = useState(0);
  const pageRefs = useRef([]);

  useEffect(() => {
    if (pageRefs.current[currentPage]) {
      const button = pageRefs.current[currentPage];
      const buttonRect = button.getBoundingClientRect();
      const parentRect = button.parentElement.getBoundingClientRect();

      setProgressLeft(button.offsetLeft + button.offsetWidth / 2 - 10);
    }
  }, [currentPage]);


  return (
    <section className="witSp" style={{ alignItems: 'center', justifyContent: 'center',}}>
      <div className={styles.wrapper}>
        {/* Blog Heading */}  
        <Typography variant="h1" className={styles.heading}>Blog</Typography>

        <Tabs
  className={styles.blogTab}
  value={tabValue}
  onChange={(e, newValue) => setTabValue(newValue)}
  textColor="primary"
  indicatorColor="primary"
>
  {[
    "Medical Scribe",
    "Technology",
    "Medical Documentation",
    "Trending",
    "Popular",
    "Physician Burnout",
    "Event",
    "Mental Health",
    "EHR Integration",
    
  ].map((label, index) => (
    <Tab key={index}  sx={{
      color: tabValue === index ? "primary.main" : "text.disabled", // Active tab color
      fontWeight: tabValue === index ? "bold" : "normal", // Optional bold style
      minWidth: "auto",
    }} label={label} />
  ))}
</Tabs>

        {/* Blog Cards Container */}
        <div className={styles.container}>
          {paginatedArticles.map((article) => (
            <div key={article.folder} className={styles.card} onClick={(event) => {const url = `/resources/blog/${article.folder}`;
            if (event.metaKey || event.ctrlKey) { window.open(url, "_blank");
            }
            else {
            router.push(url);
            }
          }}>
              <img src={article.image} alt={article.title} className={styles.image} />
              <div className={styles.content}>
                <h6 className={styles.title}>{article.title}</h6>
                <p className={styles.description}>{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {/* <div className={styles.pagination}>
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>«</button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>‹</button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} className={currentPage === i + 1 ? styles.activePage : ""} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>›</button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>»</button>
        </div> */}

{/* <div className={styles.pagination}>

  <div 
    className={styles.progress}></div>

  
  <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>«</button>
  <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>‹</button>

  {Array.from({ length: totalPages }, (_, i) => (
    <button 
      key={i + 1} 
      className={currentPage === i + 1 ? styles.activePage : ""} 
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>›</button>
  <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>»</button>
</div> */}

<div className={styles.pagination}>
      {/* Active Page Progress Bar */}
      <div className={styles.progress} style={{ left: `${progressLeft}px` }}></div>

      {/* Pagination Buttons */}
      <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>«</button>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>‹</button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          ref={(el) => (pageRefs.current[i + 1] = el)}
          className={currentPage === i + 1 ? styles.activePage : ""}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>›</button>
      <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>»</button>
    </div>


      </div>
    </section>
  );
};

export default BlogCards;

