"use client"
import { Box, Typography, IconButton, Card, CardMedia, CardContent } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef } from 'react';

const blogData = [
  {
    title: "Virtual Medical Scribe Robots : The Best Medical...",
    image: "/ImprovePatientCare.webp",
    link: "#"
  },
  {
    title: "AI Medical Scribe Company Of The New Era",
    image: "/Psychotherapy-Documentation.png",
    link: "#"
  },
  {
    title: "AI Is Set To Revolutionize The Practice of Medical...",
    image: "/Real-Life-Scenario.webp",
    link: "#"
  },
  {
    title: "What Is Medical Dictation and Scribing?",
    image: "/Willem.jpeg",
    link: "#"
  },
  {
    title: "AI Medical Scribe Company Of The New Era",
    image: "/Psychotherapy-Documentation.png",
    link: "#"
  },
  {
    title: "Virtual Medical Scribe Robots : The Best Medical...",
    image: "/ImprovePatientCare.webp",
    link: "#"
  },
];

export default function RelatedBlogs() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="witSp">
    <Box sx={{ position: 'relative', my: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Related blogs
      </Typography>

      <IconButton
        onClick={() => scroll('left')}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '-5%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'white',
          boxShadow: 2,
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: 2,
          px: 5,
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {blogData.map((blog, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 250,
              maxWidth: 250,
              borderRadius: 2,
              boxShadow: 3,
              flexShrink: 0,
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={blog.image}
              alt={blog.title}
              sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <CardContent>
              <Typography fontWeight="bold" fontSize="16px" gutterBottom>
                {blog.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <IconButton
        onClick={() => scroll('right')}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'white',
          boxShadow: 2,
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
    </section>
  );
}
