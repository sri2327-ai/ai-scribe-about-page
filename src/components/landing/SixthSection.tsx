
import { Box, Typography, Button, Stack } from "@mui/material";
import { ArrowRight } from "lucide-react";

export const SixthSection = () => {
  return(
    <section 
      className="witOutSp relative py-16 md:py-24" 
      style={{ 
        minHeight: 'unset', 
        background: `linear-gradient(180deg, #143151, #387E89)` 
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        px: { xs: 2, sm: 4, md: 6 }
      }}>
        <Stack
          spacing={{ xs: 3, md: 4 }}
          direction="column"
          sx={{
            width: '100%',
            maxWidth: { xs: '90%', sm: '600px', md: '700px', lg: '800px' },
            alignItems: "center",
            background: 'white', 
            borderRadius: { xs: 2, md: 4 }, 
            p: { xs: 3, sm: 4, md: 5 },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
          useFlexGap
        >
          <Typography 
            variant="h4"
            fontWeight="bold" 
            sx={{ 
              textAlign: "center", 
              color: "#143151",
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
              lineHeight: { xs: 1.3, md: 1.4 },
              maxWidth: '90%'
            }}
          >
            Reduce Administrative Fatigue. Enhance Productivity. Improve Patient Care. 
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              textTransform: "none",
              background: `linear-gradient(135deg, #143151, #387E89)`,
              color: 'white',
              px: { xs: 3, md: 4 },
              py: { xs: 1.25, md: 1.5 },
              borderRadius: "50px",
              transition: 'all 0.3s ease',
              "&:hover": {
                background: `linear-gradient(135deg, #143151, #387E89)`,
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(56, 126, 137, 0.3)',
                ".icon-box": {
                  transform: "rotate(-270deg)",
                },
              },
            }}
            startIcon={
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: 20, md: 25 },
                  height: { xs: 20, md: 25 },
                  borderRadius: "50%", 
                  color: "white",
                  border: `2px solid white`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Box>
            }
          >
            <Typography
              variant='h6' 
              fontWeight="semiBold" 
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: "white",
              }}
            >
              Book A Demo
            </Typography>
          </Button>
        </Stack>
      </Box>
    </section>
  );
};
