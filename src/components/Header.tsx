
'use client'
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { 
  AppBar, 
  Box, 
  Button, 
  ButtonGroup, 
  Container, 
  Divider, 
  ListSubheader, 
  IconButton, 
  MenuItem, 
  MenuList, 
  Popover, 
  Typography, 
  Toolbar, 
  useMediaQuery 
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../styles/header.module.css";

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const pathname = location.pathname;
  const isMobTabHead = useMediaQuery("(max-width:800px)");

  const tabMenus = {
    "Solutions": [
      { 'label': "CRUSH - AI Medical Scribe Assistant", 'path': "/solution/medical-scribe" },
      { 'label': "BRAVO - AI Patient Care Agent", 'path': "/solution/patient-engagement" },
    ],
    "About": [
      { 'label': "S10 Story", 'path': "/about" },
      { 'label': "Trust & Technology", 'path': "/technology" },
      { 'label': "Integrations", 'path': "/integrations" },
      { 'label': "Specialties", 'path': "/specialties" },
    ],
    "Resources": [
      { 'label': "Blog", 'path': "/resources/blog" },
      { 'label': "FAQs", 'path': "/resources/faq" },
      { 'label': "Customers", 'path': "/resources/stunning" },
      { 'label': "Case Studies", 'path': "/resources/casestudies" }
    ]
  }

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const [currentAcco, setCurrentAcco] = useState<string | null>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setMenuStatus(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMenuStatus(false);
    setCurrentAcco(null);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  // Define the teal blue highlight color
  const highlightColor = "#1EAEDB";

  return (
    <main className={styles.header_main}>
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }} 
      >
        <Container maxWidth="xl" sx={{ display: 'flex', minHeight: '10vh' }}>
          <Toolbar disableGutters sx={{ display: 'flex', minHeight: '10vh !important', paddingTop: '.5vh', paddingBottom:'.5vh', flexGrow:1, justifyContent:"space-between" }} >
            <Box sx={{ display: 'flex' }}>
              <Link to="/" className={styles.header_logo}>
                <img src="/lovable-uploads/2436c039-5cf6-44b1-a411-5f30b5a683a4.png" alt="Logo" className={styles.header_logo_img}/>
              </Link>
            </Box>
            {isMobTabHead ? 
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
                  <IconButton
                    size="large"
                    aria-label="tab-menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={menuStatus ? handleCloseNavMenu : handleOpenNavMenu}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 35,
                      height: 35,
                      borderRadius: 2, 
                      color: highlightColor,
                      border: `1px solid ${highlightColor}`,
                      "&:hover": {
                        border: "1px solid transparent",
                        backgroundColor: highlightColor,
                        color: theme.palette.text.secondary
                      },
                    }}
                  >
                    {menuStatus ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                  <Popover
                    id={'tab-menu-popup'}
                    open={menuStatus}
                    anchorEl={anchorElNav}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={() => {}}
                    anchorReference="none"
                    slotProps={{
                      root: { style: { pointerEvents: "none" } },
                      paper: {
                        sx: {
                          pointerEvents: "auto",
                          width: "100vw",
                          height: "90vh",
                          top: "10vh",
                          maxWidth: "unset",
                          borderRadius: 0,
                          py: 3,
                          px: 2,
                          backgroundColor: "rgba(18, 18, 18, 0.9)",
                          backdropFilter: "blur(10px)",
                        },
                      },
                    }}
                    disableScrollLock
                  >
                    {Object.entries(tabMenus).map(([key, value]) => {
                      let isCurMenu = value.some(item => item.path === pathname);
                      return (
                        <Box key={key}
                          onMouseEnter={() => setCurrentAcco(key)}
                          onMouseLeave={() => setCurrentAcco(null)}
                          sx={{
                            px: 2,
                            py: 1,
                            "&:hover": {
                              [`.${key}-button`]: {
                                background: highlightColor,
                                color: theme.palette.text.secondary,
                                border: 'none',
                              }, 
                              [`.${key}-arrow`]: {
                                color: theme.palette.text.secondary,
                                transform: "rotate(180deg)",
                                transition: "transform 0.3s ease",
                              },
                              [`.${key}-pointer`]: {
                                color: theme.palette.text.secondary,
                                transform: "translateX(0)",
                                opacity: 1
                              },
                            },
                          }}
                        >
                          <ListSubheader
                            className={`${key}-button`}
                            sx={{ 
                              color: theme.palette.text.primary,
                              background: isCurMenu ? 'none' : 'rgba(255, 255, 255, 0.08)',
                              border: isCurMenu ? `1px solid ${theme.palette.text.primary}` : 'none',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems:'center',
                              borderRadius: '50px',
                              gap: 1,
                              px: 2,
                              py: 1
                            }}
                          >
                            <Box
                              className={`${key}-pointer`}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: isCurMenu ? theme.palette.text.primary : theme.palette.text.secondary,
                                transition: "transform 0.3s ease, opacity 0.3s ease",
                                transform: isCurMenu ? "translateX(0)" : "translateX(-20px)",
                                opacity: isCurMenu ? 1 : 0,

                              }}
                            >
                              <Typography variant='h6' fontWeight="semiBold">•</Typography>
                            </Box>
                            <Typography variant='h6' fontWeight="semiBold" sx={{ display: "flex", flexGrow:1 }}>{key}</Typography>
                            <Box
                              className={`${key}-arrow`}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: theme.palette.text.primary,
                                transition: "transform 0.3s ease",
                                transform: "rotate(0deg)",
                              }}
                            >
                              <ExpandMoreIcon />
                            </Box>
                          </ListSubheader>
                          {
                            currentAcco === key && Object.values(value).map((values, index) => {
                              let isCurSubMenu = values.path === pathname;
                              return(
                                <Link key={index} to={values.path} className={styles.header_link}>
                                  <MenuItem 
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                      color: isCurSubMenu ? highlightColor : theme.palette.text.primary,
                                      "&:hover": {
                                          color: highlightColor,
                                      },
                                    }}
                                  ><Typography variant='subtitle1' fontWeight="semiBold" sx={{ ml: 1 }}>{values.label}</Typography>
                                  </MenuItem>
                                </Link>
                              )
                            })
                          }
                        </Box>
                      )
                      })
                    }
                    <Divider variant="middle" flexItem sx={{ my: 1 }} /> 
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent:'center',
                        p: 2
                      }}
                    >

                      <Link to="/contactus">
                      <Button 
                      variant="text" 
                        sx={{ 
                          textTransform: "capitalize",
                          "&:hover .icon-box": {
                            transform: "rotate(-270deg)",
                            color: highlightColor,
                            borderColor: highlightColor,
                          },
                          "&:hover .button-text": {
                            color: highlightColor,
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
                              color: theme.palette.text.primary,
                              border: `2px solid ${theme.palette.text.primary}`,
                              transition: "transform 0.3s ease",
                              transform: "rotate(0deg)",
                              mr: 1
                            }}
                          >
                            <ArrowForwardIcon fontSize="small" />
                          </Box>
                        }
                      >
                        <Typography
                          className="button-text"
                          variant='h6' 
                          fontWeight="semiBold" 
                          sx={{
                            color: theme.palette.text.primary,
                            transition: "color 0.3s ease"
                          }}
                        >
                          Contact Us
                        </Typography>
                      </Button>
                      </Link>
                    </Box>
                    
                  </Popover>
                </Box>
              </>
              :
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  <ButtonGroup
                    size="large"
                    aria-label="Large button group"
                    disableElevation
                    className={styles.glassmorphism}
                    sx={{
                      display: 'flex',
                      gap: 1,
                      padding: "6px 12px",
                      "& .MuiButtonGroup-firstButton": {
                        border: "none",
                        borderRadius: "50px",
                      },
                      "& .MuiButtonGroup-middleButton": {
                        border: "none",
                        borderRadius: "50px",
                      },
                      "& .MuiButtonGroup-lastButton": {
                        border: "none",
                        borderRadius: "50px",
                      }
                    }}
                  >
                    {Object.entries(tabMenus).map(([key, value]) => {
                      let isCurMenu = value.some(item => item.path === pathname);
                      return (
                        <Box key={key}
                          sx={{
                            "&:hover": {
                              [`.${key}-button`]: {
                                background: highlightColor,
                                color: theme.palette.text.secondary,
                              }, 
                              [`.${key}-arrow`]: {
                                color: theme.palette.text.secondary,
                                transform: "rotate(180deg)",
                                transition: "transform 0.3s ease",
                              },
                              [`.${key}-pointer`]: {
                                color: theme.palette.text.secondary,
                                transform: "translateX(0)",
                                opacity: 1
                              },
                            },
                          }}
                        >
                          <Button
                            className={`${key}-button`}
                            aria-owns={currentMenu === key ? `${key}-popup` : undefined}
                            aria-haspopup="true"
                            onMouseEnter={(e) => handleMenuOpen(e, key)}
                            onMouseLeave={handleMenuClose}
                            sx={{ 
                              textTransform: "capitalize", 
                              color: theme.palette.text.primary,
                              background: isCurMenu ? 'rgba(30, 174, 219, 0.2)' : 'transparent',
                            }}
                            startIcon={
                              <Box
                                className={`${key}-pointer`}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: isCurMenu ? theme.palette.text.primary : theme.palette.text.secondary,
                                  transition: "transform 0.3s ease, opacity 0.3s ease",
                                  transform: isCurMenu ? "translateX(0)" : "translateX(-20px)",
                                  opacity: isCurMenu ? 1 : 0
                                }}
                              >
                                <Typography variant='subtitle1' fontWeight="semiBold">•</Typography>
                              </Box>
                            }
                            endIcon={
                              <Box
                                className={`${key}-arrow`}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: theme.palette.text.primary,
                                  transition: "transform 0.3s ease",
                                  transform: "rotate(0deg)",
                                }}
                              >
                                <ExpandMoreIcon fontSize="small" />
                              </Box>
                            }
                          >
                            <Typography variant='subtitle1' fontWeight="semiBold">{key}</Typography>
                          </Button>
                          <Popover
                            id={`${key}-popup`}
                            sx={{ 
                              pointerEvents: 'none',
                              "&:hover": {
                                [`.${key}-button`]: {
                                  background: 'rgba(30, 174, 219, 0.2)',
                                },
                              },
                            }}
                            open={currentMenu === key}
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            onClose={handleMenuClose}
                            disableAutoFocus
                            disablePortal
                            disableScrollLock
                            disableEnforceFocus
                            slotProps={{
                              paper: {
                                className: styles.glassmorphism_dropdown,
                              }
                            }}
                          >
                            <MenuList
                              sx={{ pointerEvents: 'auto' }}
                              onMouseEnter={() => { setAnchorEl(anchorEl); setCurrentMenu(key); }}
                              onMouseLeave={handleMenuClose}
                            >
                            {Object.values(value).map((values, index) => {
                              let isCurSubMenu = values.path === pathname;
                              return(
                                <Link key={index} to={values.path} className={styles.header_link}>
                                  <MenuItem 
                                    onClick={handleMenuClose}
                                    sx={{
                                      color: isCurSubMenu ? highlightColor : theme.palette.text.primary,
                                      "&:hover": {
                                          color: highlightColor,
                                      },
                                    }}
                                  ><Typography variant='subtitle1' fontWeight="semiBold">{values.label}</Typography>
                                  </MenuItem>
                                </Link>
                              )
                            }
                            )}
                            </MenuList>
                          </Popover>
                        </Box>
                      )
                    }
                    )}
                  </ButtonGroup>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mr: 2 }}/>

                <Link to="/contactus">
                <Button 
                  variant="text" 
                  sx={{ 
                    textTransform: "capitalize",
                    "&:hover .icon-box": {
                      transform: "rotate(-270deg)",
                      color: highlightColor,
                      borderColor: highlightColor,
                    },
                    "&:hover .button-text": {
                      color: highlightColor,
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
                        color: theme.palette.text.primary,
                        border: `2px solid ${theme.palette.text.primary}`,
                        transition: "transform 0.3s ease",
                        transform: "rotate(0deg)",
                        mr: 1
                      }}
                    >
                      <ArrowForwardIcon fontSize="small" />
                    </Box>
                  }
                >
                  <Typography
                    className="button-text"
                    variant='h6' 
                    fontWeight="semiBold" 
                    sx={{
                      color: theme.palette.text.primary,
                      transition: "color 0.3s ease"
                    }}
                  >
                    Contact Us
                  </Typography>
                </Button>
                </Link>
              </>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </main>
  );
};

export default Header;
