
"use client"
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "@/styles/changelog.module.scss";
import { ArrowLeft } from "lucide-react";

const changelogs = [
  {
    date: "11 Apr 2025",
    title: "Cards: Building The Foundation For The Future Of Huly",
    desc: "This release introduces Cards — a powerful new way to structure knowledge inside your workspace...",
    title2: "Cards: Building The Foundation For The Future Of Huly",
    desc2: "This release introduces Cards — a powerful new way to structure knowledge inside your workspace...",
    imgSrc2: "/Psychotherapy-Documentation.png",
    imgSrc: "/ImprovePatientCare.webp",
  },
  {
    date: "20 Mar 2025",
    title: "Small Updates, Including Fixes For Bugs And Improvements To Overall User Experience",
    desc: "As we continue to work on a few bigger features to release in the coming weeks, this small update includes...",
    title2: "Bug Fixes, Usability Improvements, And New TraceX Features",
    desc2: "This changelog covers our last three releases to Huly, which included several bug fixes and usability improvements...",
    imgSrc2: "/ImprovePatientCare.webp",
    imgSrc: "/Psychotherapy-Documentation.png",
  },
  {
    date: "12 Mar 2025",
    title: "Bug Fixes, Usability Improvements, And New TraceX Features",
    desc: "This changelog covers our last three releases to Huly, which included several bug fixes and usability improvements...",
    title2: "Small Updates, Including Fixes For Bugs And Improvements To Overall User Experience",
    desc2: "As we continue to work on a few bigger features to release in the coming weeks, this small update includes...",
    imgSrc: "/Real-Life-Scenario.webp",
  },
  {
    date: "28 Feb 2025",
    title: "Smart Scheduling: Now Live!",
    desc: "We've introduced intelligent scheduling recommendations, helping clinicians better manage their time and appointments.",
    title2: "Performance Boosts Across the Platform",
    desc2: "Load times have been significantly reduced and backend performance has improved to ensure smoother workflows.",
    imgSrc: "/Psychotherapy-Documentation.png",
  },
  {
    date: "15 Feb 2025",
    title: "Performance Boosts Across the Platform",
    desc: "Load times have been significantly reduced and backend performance has improved to ensure smoother workflows.",
    title2: "Smart Scheduling: Now Live!",
    desc2: "We've introduced intelligent scheduling recommendations, helping clinicians better manage their time and appointments.",
    imgSrc: "/performance-boosts.webp",
  },
  {
    date: "01 Feb 2025",
    title: "Secure Messaging Between Teams & Patients",
    desc: "We're excited to roll out encrypted messaging to enhance collaboration and patient communication — fully HIPAA-compliant.",
    title2: "Cards: Building The Foundation For The Future Of Huly",
    desc2: "This release introduces Cards — a powerful new way to structure knowledge inside your workspace...",
    imgSrc: "/Psychotherapy-Documentation.png",
    imgSrc2: "/performance-boosts.webp",
  }
];

const Changelog = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
  
    cards.forEach(card => observer.observe(card));
  
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to home</span>
        </Link>
        
        <div className={styles.header}>
          <h1 className={styles.heading}>S10.AI Changelog</h1>
          <p className={styles.subheading}>Follow our product updates and improvements</p>
        </div>

        <div className={styles.timeline}>
          {changelogs.map((log, index) => {
            const [day, month, year] = log.date.split(" ");
            return (
              <div key={index} className={styles.logItem}>
                <div className={styles.dateRibbon}>
                  <span className={styles.dateDay}>{day}</span>
                  <span className={styles.dateMonth}>{month}</span>
                  <span className={styles.dateYear}>{year}</span>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    {log.imgSrc && (
                      <div className={styles.imageContainer}>
                        <img src={log.imgSrc} alt="changelog visual" className={styles.image} />
                      </div>
                    )}
                    <div className={styles.textContent}>
                      <h2 className={styles.cardTitle}>{log.title}</h2>
                      <p className={styles.cardDesc}>{log.desc}</p>
                    </div>
                  </div>
                  
                  {log.imgSrc2 && (
                    <div className={styles.cardContent}>
                      <div className={styles.imageContainer}>
                        <img src={log.imgSrc2} alt="changelog visual" className={styles.image} />
                      </div>
                      <div className={styles.textContent}>
                        <h2 className={styles.cardTitle}>{log.title2}</h2>
                        <p className={styles.cardDesc}>{log.desc2}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className={styles.logoContainer}>
                    <img src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png" alt="Logo" className={styles.logo} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
