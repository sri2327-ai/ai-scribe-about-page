
import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <section className="witSp">
      <Stack
        spacing={3}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
          alignItems: 'flex-start',
          borderRadius: 4,
          p: 3,
          flexGrow: 1
        }}
        useFlexGap
      >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'flex-start',
            maxWidth: laptopVw ? '214px' : { xs : '300px', md: '250px', lg: '400px' }
          }}
        >
          <Typography variant="h3" fontWeight="semiBold" sx={{ color: theme.palette.text.secondary }}>
            AI Solutions Designed for Every Medical Specialty
          </Typography>
          <Button 
            variant="text" 
            sx={{ 
              textTransform: "capitalize",
              background: theme.palette.common.white,
              border: `1px solid ${theme.palette.secondary.main}`,
              px: 3,
              py: 1.5,
              borderRadius: "50px",
              "&:hover":{
                ".icon-box": {
                  transform: "rotate(-270deg)",
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                },
                ".button-text": {
                  color: theme.palette.secondary.main,
                },
              },
              boxShadow:1
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
                  color: theme.palette.secondary.main,
                  border: `2px solid ${theme.palette.secondary.main}`,
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
                color: theme.palette.secondary.main,
                transition: "color 0.3s ease"
              }}
            >
              View More
            </Typography>
          </Button>
        </Box>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            justifyContent: { xs: 'center', sm : 'space-between', md: 'end' },
            flexWrap: 'wrap'
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              background: theme.palette.common.white,
              p:3,
              borderRadius: 3,
              boxShadow: 2,
              maxWidth: (tabletVw || laptopVw) ? '214px' : { xs : '250px', md: '250px', lg: '266px', xl: '300px' }
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.secondary.main }}>
              Specialty-Specific AI Models
            </Typography>
            <Typography variant="h6" fontWeight="semiBold" sx={{ color: theme.palette.secondary.main }}>
              Engineered for precise documentation needs across disciplines.
            </Typography>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              background: theme.palette.common.white,
              p:3,
              borderRadius: 3,
              boxShadow: 2,
              maxWidth: (tabletVw || laptopVw) ? '214px' : { xs : '250px', md: '250px', lg: '266px', xl: '300px' }
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.secondary.main }}>
              Workflow Optimization
            </Typography>
            <Typography variant="h6" fontWeight="semiBold" sx={{ color: theme.palette.secondary.main }}>
              Reduces charting time, improving clinician efficiency.
            </Typography>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              background: theme.palette.common.white,
              p:3,
              borderRadius: 3,
              boxShadow: 2,
              maxWidth: (tabletVw || laptopVw) ? '214px' : { xs : '250px', md: '250px', lg: '266px', xl: '300px' }
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.secondary.main }}>
              Advanced Clinical Accuracy
            </Typography>
            <Typography variant="h6" fontWeight="semiBold" sx={{ color: theme.palette.secondary.main }}>
              Captures intricate medical details with real-time documentation, from EKG reports and emergency medicine tasks like triaging and rapid interventions, to dermatology screenings.
            </Typography>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              background: theme.palette.common.white,
              p:3,
              borderRadius: 3,
              boxShadow: 2,
              maxWidth: (tabletVw || laptopVw) ? '214px' : { xs : '250px', md: '250px', lg: '266px', xl: '300px' }
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.secondary.main }}>
              Specialty-Centric AI Automation
            </Typography>
            <Typography variant="h6" fontWeight="semiBold" sx={{ color: theme.palette.secondary.main }}>
              Ensures accurate, efficient documentation for every field of medicine, including AI for multispecialty care.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </section>
  );
};
