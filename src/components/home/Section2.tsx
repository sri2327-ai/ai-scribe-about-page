'use client'
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Section2(...args: []) {
  const theme = useTheme();
  
  return(
    <section className="witSp">
      <Box sx={{padding: "10px", border: "1px solid black"}}>
        Example one
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(to right, #005477, #007A9E);"
          }} >
          Button Gradient
        </Box>
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(to left, #E6F0F5, #FFFFFF);"
          }} >
          Background Gradient
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#005477",
            color: "#FFFFFF",
            "&:hover":{ background: "#007A9E" }
          }} >
          Menu
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#D9E8EE",
            color: "#000000",
          }} >
          Tabs Inactive
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#005477",
            color: "#FFFFFF",
            "&:hover":{ background: "#00415F" }
          }} >
          Tabs Active
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#000000",
          }} >
          Text Primary
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#333333",
          }} >
          Text Secondary
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#005477",
          }} >
          Text Accent
        </Box>
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(to right, #005477, #007A9E);",
            color: "#FFFFFF",
            border: "2px solid #00415F",
            "&:hover":{ background: "#003C55" }
          }} >
          Button
        </Box>
        <Box 
          sx={{
            p:1,
            background: "rgba(0, 84, 119, 0.3)",
          }} >
          Shadow semi-transparent
        </Box>
        <Box 
          sx={{
            p:1,
            background: "0 4px 8px rgba(0, 84, 119, 0.3)",
          }} >
          soft
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#005477",
            color: "#FFFFFF",
            "&:hover":{ background: "#007A9E" }
          }} >
          Background Icons
        </Box>
        <Box 
          sx={{
            p:1,
            background: "rgba(0, 84, 119, 0.2)",
          }} >
          Images Overlay
        </Box>
        <Box 
          sx={{
            p:1,
            border: "2px solid #D9E8EE",
          }} >
          Images Border
        </Box>
      </Box>

      <Box sx={{padding: "10px", border: "1px solid black"}}>
        Example two
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(135deg, #005477, #0088A8)",
            color: "#FFFFFF",
          }} >
          Button Gradient 1
        </Box>
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(135deg, #005477, #003A55)",
            color: "#FFFFFF",
          }} >
          Button Gradient 2
        </Box>
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(180deg, #005477, #002B3A)",
            color: "#FFFFFF",
          }} >
          Background Gradient 1
        </Box>
        <Box 
          sx={{
            p:1,
            background: "linear-gradient(180deg, #005477, #0088A8, #E6F5FA)",
            color: "#FFFFFF",
          }} >
          Background Gradient 2
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#003A55",
            color: "#FFFFFF",
          }} >
          Menu Background
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#007899",
            color: "#FFFFFF",
          }} >
          Tab Active Color
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#0088A8",
            color: "#000000"
          }} >
          Tab Hover Color
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#000000",
          }} >
          Primary Text
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#333333",
          }} >
          Secondary Text
        </Box>
        <Box 
          sx={{
            p:1,
            background: "#000000",
            color: "#FFFFFF",
          }} >
          Button Text
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#005477",
          }} >
          Button Background
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#0088A8",
          }} >
          Button Hover
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#7A9BAE",
          }} >
          Button Hover
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "rgba(0, 84, 119, 0.3)",
          }} >
          Shadow
        </Box>
        <Box 
          sx={{
            p:1,
            border: "1px solid #000000",
            color: "#000000",
            background: "#F5FAFC",
          }} >
          Card Background
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#D4ECF1",
          }} >
          Icons Dark
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#005477",
          }} >
          Icons Light
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "linear-gradient(180deg, rgba(0, 84, 119, 0.7), rgba(0, 84, 119, 0.3))",
          }} >
          Image Overlay Gradient
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#0088A8",
          }} >
          Menu/Button Hover
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#007899",
          }} >
          Tab Hover
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "#00A1C4",
          }} >
          Link Hover
        </Box>
        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "linear-gradient(90deg, #009bca, #0d252b)"
          }} >
          Link Hover
        </Box>

        <Box 
          sx={{
            p:1,
            color: "#FFFFFF",
            background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 97%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);"
          }} >
          Rectangle
        </Box>
        <Box 
          sx={{
            p:5,
            color: "#FFFFFF",
            // background: "linear-gradient(180deg, #153252, #1f4962, #235168, #377B86, #235168, #1f4962, #153252)"
            background: "linear-gradient(to bottom, #0d252b, #163e48, #256879, #328da4)"
          }} >
          logo colors 1
        </Box>
        <Box 
          sx={{
            p:5,
            color: "#FFFFFF",
            background: "linear-gradient(to bottom, #153252, #1f4962, #377B86, #48a0ae)"
          }} >
          logo colors 2
        </Box>
        
        <Typography variant="h6">Logo Colors</Typography>
        <Box 
          sx={{
             display: 'flex',
             flexDirection: 'row'
          }} >
          
          <img src="/HeaderLogo.png" alt="Logo" style={{ width: "200px", height: "auto" }}/>
          <Box 
            sx={{
              width: "200px", height: "auto",
              color: "#FFFFFF",
              background: "linear-gradient(to bottom, #153252, #1f4962, #377B86, #48a0ae)"
            }} >
          </Box>
        </Box>
        <Typography variant="h6">linear-gradient(to bottom, #153252, #1f4962, #377B86, #48a0ae)</Typography>
        <Box 
            sx={{
              color: "#FFFFFF",
              background: " #153252"
            }} >
          #153252
        </Box>
        <Box 
            sx={{
              color: "#FFFFFF",
              background: " #1f4962"
            }} >
          #1f4962
        </Box>
        <Box 
            sx={{
              color: "#FFFFFF",
              background: " #377B86"
            }} >
          #377B86
        </Box>
        <Box 
            sx={{
              color: "#FFFFFF",
              background: " #48a0ae"
            }} >
          #48a0ae
        </Box>
      </Box>
      <Box 
        sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
        <Box 
          sx={{
            p:2,
            width:"100px", height: "auto",
            color: "#FFFFFF",
            background: " #153252"
          }} >
          Button1  #153252
        </Box>
        <Box 
          sx={{
            p:2,
            width:"100px", height: "auto",
            color: "#FFFFFF",
            background: " #1f4962"
          }} >
          Button2  #1f4962
        </Box>
        <Box 
          sx={{
            p:2,
            width:"100px", height: "auto",
            color: "#FFFFFF",
            background: " #377B86"
          }} >
          Button3 #377B86
        </Box>
        <Box 
          sx={{
            p:2,
            width:"100px", height: "auto",
            color: "#FFFFFF",
            background: " #48a0ae"
          }} >
          Button4  #48a0ae
        </Box>
      </Box>

      <Typography variant="h6">Logo Colors</Typography>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }} >
        <img src="/HeaderLogo.png" alt="Logo" style={{ width: "500px", height: "auto", objectFit: "contain", }}/>
        <Box 
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            pt: 20,
            pb: 20,
            color: "#FFFFFF",
            background: "linear-gradient(to bottom, #153252, #1f4962, #377B86, #48a0ae)"
          }} >
          Logo colors linear-gradient(to bottom, #153252, #1f4962, #377B86, #48a0ae)
        </Box>
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: " #153252"
        }} >
        Logo color #153252
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#1f4962"
        }} >
        Logo color #1f4962
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#377B86"
        }} >
        Logo color #377B86
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#48a0ae"
        }} >
        Logo color #48a0ae
      </Box>

      <Typography variant="h6">Logo Colors</Typography>
      <Box 
        sx={{
          textAlign: 'center',
          pt: 20,
          pb: 20,
          color: "#FFFFFF",
          background: "linear-gradient(180deg, #48a0ae, #52b5c5, #5bcbdc, #a8e4ee, #ffffff)"
        }} >
        Logo colors linear-gradient(180deg, #48a0ae, #52b5c5, #5bcbdc, #a8e4ee, #ffffff)
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: " #48a0ae"
        }} >
        Logo color #48a0ae
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#52b5c5"
        }} >
        Logo color #52b5c5
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#5bcbdc"
        }} >
        Logo color #5bcbdc
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#a8e4ee"
        }} >
        Logo color #a8e4ee
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#000000",
          background: "#FFFFFF"
        }} >
        Logo color #FFFFFF
      </Box>
      
      <Typography variant="h6">About page gradient</Typography>
      <Box 
        sx={{
          pt: 5,
          pb: 30,
          color: "#FFFFFF",
          background: "linear-gradient(90deg, #046d8d, #065d78, #084b5f, #0a3b48, #0C282F)"
        }} >
        About page linear-gradient(90deg, #046d8d, #065d78, #084b5f, #0a3b48, #0C282F)
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: " #046d8d"
        }} >
        About page #046d8d
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#065d78"
        }} >
        About page #065d78
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#084b5f"
        }} >
        About page #084b5f
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#0a3b48"
        }} >
        About page #0a3b48
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#0C282F"
        }} >
        About page #0C282F
      </Box>

      <Typography variant="h6">About page gradient</Typography>
      <Box 
        sx={{
          pt: 5,
          pb: 30,
          color: "#000000",
          background: "linear-gradient(90deg, #ffffff, #75cae3, #069bc8, #0584ab, #046d8d )"
        }} >
        About page linear-gradient(90deg, #ffffff, #75cae3, #069bc8, #0584ab, #046d8d )
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#000000",
          background: " #ffffff"
        }} >
        About page #ffffff
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#75cae3"
        }} >
        About page #75cae3
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#069bc8"
        }} >
        About page #069bc8
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#0584ab"
        }} >
        About page #0584ab
      </Box>
      <Box 
        sx={{
          p: 2,
          mb:10, 
          color: "#FFFFFF",
          background: "#046d8d"
        }} >
        About page #046d8d
      </Box>


      <Typography variant="h6">Color Codes List</Typography>
      <Box 
        sx={{
          py: 2,
          color: "#FFFFFF",
          background: "#143151",
          textAlign: "center"
        }} >
        Primary main - #143151
      </Box>
      <Box 
        sx={{
          py: 2,
          color: "#FFFFFF",
          background: "#387E89",
          textAlign: "center"
        }} >
        Primary light - #387E89
      </Box>
      <Box 
        sx={{
          py: 2,
          color: "#FFFFFF",
          background: "#5192AE",
          textAlign: "center"
        }} >
        Secondary main - #5192AE
      </Box>
      <Box 
        sx={{
          py: 2,
          color: "#FFFFFF",
          background: "#A5CCF3",
          textAlign: "center"
        }} >
        Secondary light - #A5CCF3
      </Box>
      <Box 
        sx={{
          py: 2,
          color: "#FFFFFF",
          background: "#000000",
          textAlign: "center"
        }} >
        Common black / Text primary - #000000
      </Box>
      <Box 
        sx={{
          py: 2,
          color: "#000000",
          background: "#FFFFFF",
          textAlign: "center"
        }} >
        Common white / Text secondary - #FFFFFF
      </Box>

      <Typography variant="h6" sx={{ mt: 2 }} >Hover</Typography>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap:1,
        }}>
        <Box 
          sx={{
            flexBasis: '32.89%',
            py: 2,
            color: "#FFFFFF",
            background: " #143151",
            textAlign: "center",
            border: '2px solid #143151',
            borderRadius: 2,
            "&:hover": {
              color: "#143151",
              background: " #FFFFFF",
            }
          }} >
          Hover 1 (Primary main) -  #143151
        </Box>
        <Box 
          sx={{
            flexBasis: '32.89%',
            py: 2,
            color: "#FFFFFF",
            background: " #387E89",
            textAlign: "center",
            border: '2px solid #387E89',
            borderRadius: 2,
            "&:hover": {
              color: "#387E89",
              background: " #FFFFFF",
            }            
          }} >
          Hover 2 (Primary light) -  #387E89
        </Box>
        <Box 
          sx={{
            flexBasis: '32.89%',
            py: 2,
            color: "#FFFFFF",
            background: " #5192AE",
            textAlign: "center",
            border: '2px solid #5192AE',
            borderRadius: 2,
            "&:hover": {
              color: "#5192AE",
              background: " #FFFFFF",
            }
          }} >
          Hover 3 (Secondary main) -  #5192AE
        </Box>
        <Box 
          sx={{
            flexBasis: '32.89%',
            py: 2,
            color: "#FFFFFF",
            background: " #A5CCF3",
            textAlign: "center",
            border: '2px solid #A5CCF3',
            borderRadius: 2,
            "&:hover": {
              color: "#A5CCF3",
              background: " #FFFFFF",
            }
          }} >
          Hover 4 (Secondary light) -  #A5CCF3
        </Box>
        <Box 
          sx={{
            flexBasis: '32.89%',
            py: 2,
            color: "#FFFFFF",
            background: " #000000",
            textAlign: "center",
            border: '2px solid #000000',
            borderRadius: 2,
            "&:hover": {
              color: "#000000",
              background: " #FFFFFF",
            }
          }} >
          Hover 5 (Common black) -  #000000
        </Box>
        <Box 
          sx={{
            flexBasis: '32.89%',
            py: 2,
            color: "#000000",
            background: " #FFFFFF",
            textAlign: "center",
            border: '2px solid #000000',
            borderRadius: 2,
            "&:hover": {
              color: "#FFFFFF",
              background: " #000000",
            }
          }} >
          Hover 6 (Common white) -  #FFFFFF
        </Box>
      </Box>

      <Typography variant="h6" sx={{ mt: 2 }} >Backgrounds</Typography>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
        <Box 
          sx={{
            flexBasis: '33.33%',
            py: 2,
            color: "#FFFFFF",
            background: " #143151",
            textAlign: "center"
          }} >
          Background 1 (Primary main) -  #143151
        </Box>
        <Box 
          sx={{
            flexBasis: '33.33%',
            py: 2,
            color: "#FFFFFF",
            background: " #387E89",
            textAlign: "center"
          }} >
          Background 2 (Primary light) -  #387E89
        </Box>
        <Box 
          sx={{
            flexBasis: '33.33%',
            py: 2,
            color: "#FFFFFF",
            background: " #5192AE",
            textAlign: "center"
          }} >
          Background 3 (Secondary main) -  #5192AE
        </Box>
        <Box 
          sx={{
            flexBasis: '33.33%',
            py: 2,
            color: "#FFFFFF",
            background: " #A5CCF3",
            textAlign: "center"
          }} >
          Background 4 (Secondary light) -  #A5CCF3
        </Box>
        <Box 
          sx={{
            flexBasis: '33.33%',
            py: 2,
            color: "#FFFFFF",
            background: " #000000",
            textAlign: "center"
          }} >
          Background 5 (Common black) -  #000000
        </Box>
        <Box 
          sx={{
            flexBasis: '33.33%',
            py: 2,
            color: "#000000",
            background: " #FFFFFF",
            textAlign: "center"
          }} >
          Background 6 (Common white) -  #FFFFFF
        </Box>
      </Box>



      <Typography variant="h6" sx={{ mt: 2 }}>Dark Background gradient</Typography>
      <Box 
        sx={{
          py: 12,
          color: "#FFFFFF",
          background: "linear-gradient(135deg, #143151, #387E89)",
          textAlign: "center"
        }} >
        Dark Background linear-gradient(135deg, (Primary main) - #143151, (Primary light) - #387E89)
      </Box>
      <Typography variant="h6" sx={{ mt: 2 }}>Medium Background gradient</Typography>
      <Box 
        sx={{
          py: 12,
          color: "#FFFFFF",
          background: "linear-gradient(135deg, #5192AE, #A5CCF3)",
          textAlign: "center"
        }} >
        Medium Background linear-gradient(135deg, (Secondary light) - #5192AE, (Secondary light) - #A5CCF3)
      </Box>
      <Typography variant="h6" sx={{ mt: 2 }}>Light Background gradient</Typography>
      <Box 
        sx={{
          py: 12,
          color: "#000000",
          background: "linear-gradient(135deg, #A5CCF3, #FFFFFF)",
          textAlign: "center"
        }} >
        Light Background linear-gradient(135deg, (Secondary light) - #A5CCF3, (Common white) - #FFFFFF)
      </Box>




      <Box 
        sx={{
          p: 2,
          color: "#000000",
          background: " #ffffff"
        }} >
        About page #ffffff
      </Box>

      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#75cae3"
        }} >
        About page #75cae3
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#069bc8"
        }} >
        About page #069bc8
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#0584ab"
        }} >
        About page #0584ab
      </Box>
      <Box 
        sx={{
          p: 2,
          color: "#FFFFFF",
          background: "#046d8d"
        }} >
        About page #046d8d
      </Box>

      <div style={{ display: "flex", flexDirection: "row", flexWrap:'wrap', gap: "15px" }}>
        <div style={{ display: "flex", flex:1, flexDirection: "column" }}>
          <Typography variant="h1">Innovative</Typography>
          <Typography variant="h1">Ambeient</Typography>
          <Typography variant="h1">AI Solution</Typography>
          <Typography variant="h1" color="secondary">For Healthcare</Typography>
        </div>
        <div style={{ display: "flex", flex:1, flexDirection: "column" }}>
          <Typography variant="h1">Innovative</Typography>
          <Typography variant="h1">Ambeient</Typography>
          <Typography variant="h1">AI Solution</Typography>
          <Typography variant="h1" color="secondary">For Healthcare</Typography>
        </div>
      </div>
    </section>
  )    
}
