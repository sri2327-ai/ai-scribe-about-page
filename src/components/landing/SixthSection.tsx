
import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";

export const SixthSection = () => {
  const theme = useTheme();

  return(
    <section 
      className="witOutSp" 
      style={{ 
        minHeight: 'unset', 
        background: `linear-gradient(180deg, #143151, #387E89)` 
      }}
    >
      <Box sx={{ display:'flex', justifyContent:'center' }}>
        <Stack
          spacing={4}
          direction="column"
          sx={{
            maxWidth: { xs : '300px', sm: '450px', md: '500px', lg: '550px' },
            alignItems: "center",
            background: theme.palette.common.white, 
            borderRadius: 4, 
            p: 3, 
            boxShadow: 1
          }}
          useFlexGap
        >
          <Typography 
            variant="h5" 
            fontWeight="medium" 
            sx={{ 
              textAlign: "center", 
              color: "#143151" 
            }}
          >
            Reduce Administrative Fatigue. Enhance Productivity. Improve Patient Care. 
          </Typography>
          <Button 
            variant="text" 
            sx={{ 
              textTransform: "capitalize",
              background: `linear-gradient(135deg, #143151, #387E89)`,
              color: 'white',
              px: 3,
              py: 1.5,
              borderRadius: "50px",
              "&:hover":{
                ".icon-box": {
                  transform: "rotate(-270deg)",
                  color: "white",
                  borderColor: "white",
                },
                ".button-text": {
                  color: "white",
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
                  width: 25,
                  height: 25,
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
              className="button-text"
              variant='h6' 
              fontWeight="semiBold" 
              sx={{
                color: "white",
                transition: "color 0.3s ease"
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
