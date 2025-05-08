
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Typography, Box } from "@mui/material";

interface TeamMemberCardProps {
  name: string;
  title: string;
  company?: string;
  imageSrc?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  company,
  imageSrc
}) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {imageSrc ? (
            <Box
              component="img"
              src={imageSrc}
              alt={name}
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                mb: 2,
                mx: 'auto'
              }}
            />
          ) : (
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                mx: 'auto',
                color: '#9e9e9e',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              {name.charAt(0)}
            </Box>
          )}
          
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              fontWeight: 'medium',
              mb: 0.5,
              color: '#000000'
            }}
          >
            {name}
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: '#403E43',
              mb: company ? 0.5 : 0
            }}
          >
            {title}
          </Typography>
          
          {company && (
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: '#8A898C'
              }}
            >
              {company}
            </Typography>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
