'use client'
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Section1(...args: []) {
  const theme = useTheme();

  return(
    <section className="witOutSp" style={{ backgroundColor: theme.palette.primary.main }}>
      <Typography variant="h1">HEADING - h1</Typography>
      <Typography variant="h2">HEADING - h2</Typography>
      <Typography variant="h3">HEADING - h3</Typography>
      <Typography variant="h4">HEADING - h4</Typography>
      <Typography variant="h5">HEADING - h5</Typography>
      <Typography variant="h6">HEADING - h6</Typography>
      <Typography variant="subtitle1">SUBTITLE1 - subtitle1</Typography>
      <Typography variant="subtitle2">SUBTITLE2 - subtitle2</Typography>
      <Typography variant="body1">BODY1 - body1</Typography>
      <Typography variant="body2">BODY2 -body2</Typography>
      <Typography variant="button">BUTTON - button</Typography>
      <Typography variant="caption">CAPTION - caption</Typography>
      <Typography variant="overline">OVERLINE - overline</Typography>
      <Box sx={{position: 'relative', padding: "0px", bgcolor: 'red', width: '1000px', height: '200px'}}>
        <Box sx={{position: 'relative', top:0, right: 10, bgcolor: 'green', width: '50px', height: '100px'}}>
          Hello World
        </Box>
      </Box>
      <Box sx={{ position: 'relative', background: 'lightgray', p: 2, borderRadius: 2 }}>
        {/* Top-Right Corner Content */}
        <Box sx={{ position: 'relative', top: 10, right: 10 }}>
          <Typography variant="h6">Hello World</Typography>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Typography variant="body1">
            HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ float: 'right',  background: theme.palette.grey['300']}}>
          <img
          src={"/circleIcon.png"}
          style={{ width:'100px', height: 'auto'}}
          />
        </Box>
        <Typography variant="body1">
          HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
          HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
          HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
          HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
          HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
          HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world HEllo world
        </Typography>
      </Box>

    </section>
  )    
}
