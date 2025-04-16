
import React, { useEffect, useState, useMemo } from "react";
import { Box } from "@mui/material";

// Since we don't have next-themes, we'll use a simple approach for theming
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 20,
      paddingBottom: 20,
      height: 180,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// List of common EHR system icons
const ehrIcons = [
  { name: "Epic", slug: "epic" },
  { name: "Cerner", slug: "cerner" },
  { name: "Meditech", slug: "meditech" },
  { name: "NextGen", slug: "nextgen" },
  { name: "Allscripts", slug: "allscripts" },
  { name: "eClinicalWorks", slug: "eclinicalworks" },
  { name: "athenahealth", slug: "athenahealth" },
  { name: "Practice Fusion", slug: "practicefusion" },
  { name: "Greenway Health", slug: "greenway" },
  { name: "McKesson", slug: "mckesson" },
  { name: "CPSI", slug: "cpsi" },
  { name: "DrChrono", slug: "drchrono" },
  { name: "CureMD", slug: "curemd" },
  { name: "Kareo", slug: "kareo" }
];

export const EhrIconCloud = () => {
  const [mounted, setMounted] = useState(false);
  const [Cloud, setCloud] = useState<any>(null);
  const [SimpleIcons, setSimpleIcons] = useState<any>(null);

  // Dynamically import the react-icon-cloud package
  useEffect(() => {
    const loadDependencies = async () => {
      try {
        // Dynamic imports for the client-side only library
        const iconCloudModule = await import('react-icon-cloud');
        const { Cloud, renderSimpleIcon, fetchSimpleIcons } = iconCloudModule;
        
        setCloud(() => Cloud);
        
        // This is a workaround since we don't have actual SimpleIcons
        // In a real implementation, we'd fetch actual icons
        const mockSimpleIcons = ehrIcons.map(ehr => ({
          title: ehr.name,
          slug: ehr.slug,
          hex: Math.floor(Math.random()*16777215).toString(16), // Random color
          path: 'M0 0h24v24H0z', // Placeholder path
        }));
        
        setSimpleIcons(mockSimpleIcons);
        setMounted(true);
      } catch (error) {
        console.error("Failed to load icon cloud dependencies:", error);
      }
    };
    
    loadDependencies();
  }, []);

  const renderedIcons = useMemo(() => {
    if (!mounted || !SimpleIcons) return null;
    
    // This would typically use the renderSimpleIcon function from the package
    // For now, we're creating fallback elements
    return ehrIcons.map((ehr, index) => (
      <div 
        key={index}
        style={{
          padding: '10px 16px',
          margin: '5px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          color: '#143151',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          cursor: 'default',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        }}
        className="hover:scale-110 hover:shadow-md"
      >
        {ehr.name}
      </div>
    ));
  }, [SimpleIcons, mounted]);

  if (!mounted) {
    return (
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
          height: 180,
          alignItems: 'center'
        }}
      >
        <div>Loading EHR systems...</div>
      </Box>
    );
  }

  // If we have the Cloud component from react-icon-cloud
  if (Cloud) {
    return (
      <Cloud {...cloudProps}>
        {renderedIcons}
      </Cloud>
    );
  }

  // Fallback if the Cloud component doesn't load properly
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        py: 3
      }}
    >
      {renderedIcons}
    </Box>
  );
};
