
"use client"
import React, { useState } from "react";
import styles from "@/styles/changelog.module.scss"; // Reusing changelog styles
import { Cookie, Search } from "lucide-react";

interface Article {
  title: string;
}

interface Card {
  icon: JSX.Element;
  title: string;
  count: string;
  articles: Article[];
}

const HelpLibrary = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentContent, setCurrentContent] = useState<'default' | string>('default');
  const [currentContentObj, setCurrentContentObj] = useState<Article | null>(null);

  const cards: Card[] = [
    {
      icon: <div className={styles.categoryIcon}>📚</div>,
      title: 'Introduction & Setup',
      count: '2 articles',
      articles: [
        {title: 'Getting Started with S10.AI'},
        {title: 'Best Practices: Editing Your Generated Note'}
      ],
    },
    {
      icon: <div className={styles.categoryIcon}>📝</div>,
      title: 'Step-by-Step Guides',
      count: '25 articles',
      articles: [
        {title: 'How to Start an Encounter?'},
        {title: 'How to Add a Summary?'},
        {title: 'How to Stop an Encounter?'},
        {title: 'How to Start a Televisit Encounter on Windows?'},
        {title: 'How to Start a Televisit Encounter on Mac?'},
        {title: 'How to Add Appointments?'},
        {title: 'How to Upload Appointments?'},
        {title: 'How to Move to the Next Appointment?'},
        {title: 'How to Automate Note Entry into the EHR?'},
        {title: 'How to Perform Pre-Charting?'},
        {title: 'How to Upload Files and Lab Reports?'},
        {title: 'How to Reset Your Password?'},
        {title: 'How to Enable MFA?'},
        {title: 'How to View Full Transcript?'},
        {title: 'How to Use Edit?'},
        {title: 'How to Download Notes?'},
        {title: 'How to Use S10.AI for Languages Other Than English?'},
        {title: 'How to Filter by Location?'},
        {title: 'How to Filter My Appointments?'},
        {title: 'How to Raise a Support Ticket?'},
        {title: 'How to Share Feedback?'},
        {title: 'How to Schedule a Live Feedback Session?'},
        {title: 'How to Explore the S10.AI Medical Scribe?'},
        {title: 'How to View Keyboard Shortcuts?'},
        {title: 'How to Recommend S10.AI to Other Physicians?'},
      ],
    },
    {
      icon: <div className={styles.categoryIcon}>🔧</div>,
      title: 'Technical Set Up & Troubleshooting',
      count: '5 articles',
      articles: [
        {title: 'Device Permission Enablement Steps for Mac'},
        {title: 'Device Permission Enablement Steps for Windows'},
        {title: 'Troubleshooting Guide S10.AI Mobile'},
        {title: 'Troubleshooting Guide S10.AI Mac'},
        {title: 'Troubleshooting Guide S10.AI Windows'},
      ]
    },
  ];

  const handleAcceptCookies = () => {
    setShowCookieConsent(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };
  
  const handleDeclineCookies = () => {
    setShowCookieConsent(false);
    localStorage.setItem('cookiesDeclined', 'true');
  };
  
  // Check for existing cookie preference
  React.useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const cookiesDeclined = localStorage.getItem('cookiesDeclined');
    
    if (cookiesAccepted === 'true' || cookiesDeclined === 'true') {
      setShowCookieConsent(false);
    }
    
    // Animation effect for cards
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
        <div className={styles.header}>
          <h1 className={styles.heading}>S10.AI Help Center</h1>
          <p className={styles.subheading}>Making Life Easy For Clinicians</p>
        </div>

        {/* Search Container */}
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search here..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {currentContent === 'default' ? (
          <div className={styles.timeline}>
            {cards
              .filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .length === 0 ? (
              <div className={styles.noResults}>No Results Found</div>
            ) : (
              cards
                .filter((card) => card.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((card, index) => (
                  <div key={index} className={styles.logItem}>
                    <div className={styles.dateRibbon}>
                      {card.icon}
                    </div>
                    <div 
                      className={styles.card}
                      onClick={() => {
                        setCurrentContent(card.title);
                        setSearchQuery('');
                      }}
                    >
                      <div className={styles.cardContent}>
                        <div className={styles.textContent}>
                          <h2 className={styles.cardTitle}>{card.title}</h2>
                          <p className={styles.cardDesc}>{card.count}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        ) : currentContentObj ? (
          <div className={styles.articleContent}>
            {/* Breadcrumb Navigation */}
            <div className={styles.breadcrumb}>
              <span 
                className={styles.breadcrumbLink} 
                onClick={() => {
                  setCurrentContent('default');
                  setCurrentContentObj(null);
                }}
              >
                All Collections
              </span>
              <span className={styles.breadcrumbSeparator}>›</span>
              <span 
                className={styles.breadcrumbLink} 
                onClick={() => setCurrentContentObj(null)}
              >
                {currentContent}
              </span>
              <span className={styles.breadcrumbSeparator}>›</span>
              <span className={styles.breadcrumbCurrent}>
                {currentContentObj.title}
              </span>
            </div>
            
            {/* Article Title and Content */}
            <h2 className={styles.articleTitle}>{currentContentObj.title}</h2>
            <div className={styles.articleBody}>
              <p>This is a placeholder for the article content. In a real implementation, this would display the full text and media for "{currentContentObj.title}".</p>
              <p>The content would be loaded dynamically based on the selected article.</p>
            </div>
          </div>
        ) : (
          <div className={styles.articlesList}>
            {/* Breadcrumb for Articles List */}
            <div className={styles.breadcrumb}>
              <span 
                className={styles.breadcrumbLink} 
                onClick={() => setCurrentContent('default')}
              >
                All Collections
              </span>
              <span className={styles.breadcrumbSeparator}>›</span>
              <span className={styles.breadcrumbCurrent}>{currentContent}</span>
            </div>
            
            {/* Articles List Header */}
            <h2 className={styles.sectionTitle}>{currentContent}</h2>
            
            {/* Articles List */}
            <div className={styles.articlesGrid}>
              {cards
                .find((card) => card.title === currentContent)
                ?.articles.filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .length === 0 ? (
                <div className={styles.noResults}>No Results Found</div>
              ) : (
                cards
                  .find((card) => card.title === currentContent)
                  ?.articles.filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((article, index) => (
                    <div 
                      key={index} 
                      className={styles.articleItem}
                      onClick={() => {
                        setCurrentContentObj(article);
                        setSearchQuery('');
                      }}
                    >
                      <div className={styles.articleTitle}>{article.title}</div>
                      <div className={styles.articleArrow}>→</div>
                    </div>
                  ))
              )}
            </div>
          </div>
        )}

        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <img src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png" alt="Logo" className={styles.logo} />
        </div>
      </div>
      
      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className={styles.cookieConsent}>
          <div className={styles.cookieIcon}>
            <Cookie size={20} />
          </div>
          <div className={styles.cookieContent}>
            <h3 className={styles.cookieTitle}>Cookie Preferences</h3>
            <p className={styles.cookieText}>We use cookies to enhance your browsing experience, analyze site traffic and personalize content.</p>
            <div className={styles.cookieButtons}>
              <button className={styles.acceptButton} onClick={handleAcceptCookies}>
                Accept All
              </button>
              <button className={styles.declineButton} onClick={handleDeclineCookies}>
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpLibrary;
