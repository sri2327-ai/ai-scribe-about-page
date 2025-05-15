import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { motion } from "framer-motion";
import { 
  FileText, Send, CheckCircle, 
  ClipboardList, TestTube, Mail, 
  Mic, History, Globe, Database 
} from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { useIsMobile } from "@/hooks/use-mobile";

// Define vibrant colors inspired by the Bravo workflow animation
const stepColors = {
  start: "#046f90",       // Blue
  previous: "#387E89",    // Teal
  notes: "#5192AE",       // Light Blue
  referral: "#9b87f5",    // Purple for "create referral letters"
  labs: "#f06292",        // Pink
  instructions: "#1EAEDB", // Bright Blue for "generate patient instructions"
  ehr: "#4CAF50"          // Green for "push to ehr"
};

// Typography component to avoid repetition
const Typography = ({ children, component = "p", sx = {} }) => {
  const defaultSx = {
    margin: 0,
    padding: 0,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    ...sx
  };
  
  return React.createElement(component, { style: defaultSx }, children);
};

const workflowSteps = [
  {
    id: "start",
    title: "Start Encounter",
    icon: <Send size={30} style={{ color: stepColors.start }} />,
    description: "Recording patient conversation...",
    color: stepColors.start,
    detailContent: (props) => (
      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            py: 2
          }}
        >
          <div className="relative">
            <Mic size={36} style={{ color: stepColors.start }} />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <Typography 
            component="div"
            sx={{ 
              color: stepColors.start,
              fontSize: '0.875rem', 
              textAlign: 'center'
            }}
          >
            {props.timerDisplay}
          </Typography>
          
          {/* Voice waves visualization */}
          <Box 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 0.5 
            }}
          >
            {Array(20).fill(0).map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  height: [8, i % 3 === 0 ? 18 : 12, 8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
                style={{
                  width: '2px',
                  backgroundColor: `${i % 2 === 0 ? stepColors.start : '#5192AE'}`,
                  borderRadius: '1px'
                }}
              />
            ))}
          </Box>
          
          {/* Enhanced Figma-style illustration with multilingual capabilities */}
          <motion.div 
            className="mt-3 bg-white rounded-lg shadow-sm p-3 w-full border border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium">Live Transcription</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-xs text-blue-500">Multi-lingual</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Mic className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-2xl p-3 max-w-[90%]">
                    <div className="h-2 w-3/4 bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-blue-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-start justify-end">
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-3 max-w-[90%] ml-auto">
                    <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 shrink-0"></div>
              </div>

              {/* Language selector indicator */}
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-2 flex flex-wrap gap-1 justify-center"
              >
                {["English", "Español", "Français", "中文", "日本語"].map((lang, i) => (
                  <motion.div 
                    key={lang} 
                    className={`px-2 py-0.5 rounded-full text-xs ${i === 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {lang}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </Box>
      </Box>
    )
  },
  {
    id: "previous",
    title: "Previous Visit Context",
    icon: <History size={30} style={{ color: stepColors.previous }} />,
    description: "Reviewing patient history for context...",
    color: stepColors.previous,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.previous}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.previous}05`,
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            position: 'relative',
            height: '80px',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '8px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Visit Date:</span> March 12, 2025
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '28px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 0.5s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Symptoms:</span> Recurring headaches, vision changes
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '48px',
              left: '12px',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              animation: 'typing 2s 1s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.previous
            }}
          >
            <span style={{ color: stepColors.previous }}>Plan:</span> MRI ordered, follow-up in two weeks
          </Typography>
        </Box>
        
        {/* Figma-style calendar illustration */}
        <motion.div 
          className="mt-3 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <History className="w-4 h-4" style={{ color: stepColors.previous }} />
            <span className="text-sm font-medium" style={{ color: stepColors.previous }}>Patient History</span>
          </div>
          
          <div className="grid grid-cols-4 gap-2 text-center mb-2">
            {['2025', 'Jan', 'Feb', 'Mar'].map((month, i) => (
              <div 
                key={i} 
                className={`text-xs p-1 rounded ${i === 0 ? 'bg-gray-100 font-medium' : i === 3 ? `bg-teal-50 text-teal-700` : ''}`}
              >
                {month}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {['M','T','W','T','F','S','S'].map((day, i) => (
              <div key={i} className="text-center text-xs text-gray-500">{day}</div>
            ))}
            {Array(31).fill(0).map((_, i) => {
              const isHighlighted = i + 1 === 12;
              return (
                <motion.div 
                  key={i}
                  className={`text-center text-xs p-1 rounded-full ${isHighlighted ? 'bg-teal-500 text-white' : ''}`}
                  whileHover={{ scale: isHighlighted ? 1.2 : 1 }}
                  animate={isHighlighted ? { scale: [1, 1.1, 1], boxShadow: ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 8px rgba(0,0,0,0.1)', '0px 0px 0px rgba(0,0,0,0)'] } : {}}
                  transition={{ repeat: isHighlighted ? Infinity : 0, repeatDelay: 2, duration: 0.8 }}
                >
                  {i + 1}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "notes",
    title: "Generate Clinical Notes",
    icon: <FileText size={30} style={{ color: stepColors.notes }} />,
    description: "Creating comprehensive documentation using your preferred templates...",
    color: stepColors.notes,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        {/* Enhanced Figma-style document illustration with the content integrated */}
        <motion.div 
          className="mt-3 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: stepColors.notes }} />
              <span className="text-sm font-medium" style={{ color: stepColors.notes }}>Clinical Note</span>
            </div>
            <div className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">
              Generating...
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>SUBJECTIVE</div>
              <div className="bg-blue-50 p-2 rounded-md text-xs text-blue-800">
                Patient presents with acute abdominal pain...
              </div>
            </div>
            
            <div>
              <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>OBJECTIVE</div>
              <div className="bg-blue-50 p-2 rounded-md text-xs text-blue-800">
                Temp 101.2°F, tender RLQ with guarding...
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>ICD-10</div>
                <div className="bg-blue-50 p-2 rounded-md text-xs text-blue-800">
                  K35.80 (Unspecified acute appendicitis)
                </div>
              </div>
              
              <div>
                <div className="text-xs font-medium mb-1" style={{ color: stepColors.notes }}>CPT/E&M</div>
                <div className="bg-blue-50 p-2 rounded-md text-xs text-blue-800">
                  99203 (New patient, detailed exam)
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <motion.div
                className="w-full h-1 bg-blue-100 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
                />
              </motion.div>
              <div className="flex justify-end mt-1">
                <div className="text-xs text-blue-400">Processing...</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "referral",
    title: "Create Referral Letters",
    icon: <ClipboardList size={30} style={{ color: stepColors.referral }} />,
    description: "Preparing specialist referrals...",
    color: stepColors.referral,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.referral}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.referral}05`,
            fontSize: '0.75rem',
            height: '80px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '8px',
              left: '12px',
              fontSize: '0.75rem',
              animation: 'typing 2s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.referral
            }}
          >
            Dear Dr. John Doe,
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '28px',
              left: '12px',
              fontSize: '0.75rem',
              animation: 'typing 2s 0.7s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.referral
            }}
          >
            I'm referring a patient with suspected acute appendicitis...
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              position: 'absolute',
              top: '48px',
              left: '12px',
              fontSize: '0.75rem',
              animation: 'typing 2s 1.4s steps(40, end)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              color: stepColors.referral
            }}
          >
            Urgent surgical consultation is recommended...
          </Typography>
        </Box>
        
        {/* Figma-style referral illustration */}
        <motion.div 
          className="mt-3 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList className="w-4 h-4" style={{ color: stepColors.referral }} />
            <span className="text-sm font-medium" style={{ color: stepColors.referral }}>Specialty Referral</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-purple-50 rounded-lg p-2 border border-purple-100">
              <div className="text-xs text-purple-700 mb-1 font-medium">Cardiology</div>
              <motion.div
                className="w-full h-1 bg-purple-200 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>
            </div>
            <div className="bg-blue-50 rounded-lg p-2 border border-blue-100">
              <div className="text-xs text-blue-700 mb-1 font-medium">Gastroenterology</div>
              <div className="w-full h-1 bg-blue-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-2 border border-green-100">
              <div className="text-xs text-green-700 mb-1 font-medium">Neurology</div>
              <div className="w-full h-1 bg-green-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                />
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-2 border border-red-100">
              <div className="text-xs text-red-700 mb-1 font-medium">Surgery</div>
              <div className="w-full h-1 bg-red-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1.3, delay: 0.6 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "labs",
    title: "Process Lab & Prescription Orders",
    icon: <TestTube size={30} style={{ color: stepColors.labs }} />,
    description: "Submitting necessary lab work and prescriptions...",
    color: stepColors.labs,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[
            { name: "CBC with Differential", status: "Ordered" },
            { name: "C-Reactive Protein", status: "Ordered" },
            { name: "Comprehensive Metabolic Panel", status: "Ordered" },
            { name: "Amoxicillin 500mg", type: "Rx", status: "Prescribed" }
          ].map((item, i) => (
            <Box 
              key={i}
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                bgcolor: item.type === 'Rx' ? 'rgba(252, 211, 77, 0.1)' : `${stepColors.labs}10`,
                border: item.type === 'Rx' ? '1px solid rgba(252, 211, 77, 0.3)' : `1px solid ${stepColors.labs}30`,
                fontSize: '0.75rem',
                animation: `slideIn 0.3s ${i * 0.15}s both`
              }}
            >
              <Typography 
                component="div"
                sx={{ 
                  fontSize: '0.75rem', 
                  color: item.type === 'Rx' ? '#b45309' : stepColors.labs
                }}
              >
                {item.name}
              </Typography>
              <Typography 
                component="div"
                sx={{ 
                  fontSize: '0.7rem', 
                  color: 'green',
                  bgcolor: 'rgba(0,128,0,0.1)',
                  px: 0.8,
                  py: 0.2,
                  borderRadius: 1,
                  ml: 1
                }}
              >
                {item.status}
              </Typography>
            </Box>
          ))}
        </Box>
        
        {/* Figma-style lab illustration */}
        <motion.div 
          className="mt-3 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <TestTube className="w-4 h-4" style={{ color: stepColors.labs }} />
            <span className="text-sm font-medium" style={{ color: stepColors.labs }}>Laboratory Orders</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { icon: TestTube, name: "Blood Work", count: 3 },
              { icon: TestTube, name: "Imaging", count: 1 },
              { icon: TestTube, name: "Pathology", count: 0 },
              { icon: TestTube, name: "Cultures", count: 2 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2 bg-pink-50 p-2 rounded-lg border border-pink-100"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <div className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center">
                  <item.icon className="w-3 h-3 text-pink-600" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-pink-700">{item.name}</div>
                  {item.count > 0 && (
                    <div className="text-[10px] text-pink-500">{item.count} orders</div>
                  )}
                </div>
                {item.count > 0 && (
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="p-2 bg-yellow-50 rounded-lg border border-yellow-100">
            <div className="flex items-center gap-2">
              <TestTube className="w-4 h-4 text-yellow-600" />
              <div className="text-xs font-medium text-yellow-700">Prescription</div>
            </div>
            <div className="mt-1 text-[10px] text-yellow-600">1 medication ordered • Ready in 30 mins</div>
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "instructions",
    title: "Generate Patient Instructions",
    icon: <Mail size={30} style={{ color: stepColors.instructions }} />,
    description: "Creating personalized care instructions...",
    color: stepColors.instructions,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Box 
          sx={{ 
            border: `1px solid ${stepColors.instructions}30`, 
            p: 1.5, 
            borderRadius: 1,
            bgcolor: `${stepColors.instructions}05`,
            fontSize: '0.75rem',
            position: 'relative',
            height: '100px',
            overflow: 'hidden'
          }}
        >
          <Typography 
            component="div"
            sx={{ display: 'block', mb: 1, color: stepColors.instructions }}
          >
            <Mail size={12} style={{ display: 'inline', marginRight: '4px', color: stepColors.instructions }} /> Sent via secure email
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              fontSize: '0.75rem',
              mb: 0.5,
              animation: 'fadeIn 0.5s',
              color: stepColors.instructions
            }}
          >
            Dear Patient,
          </Typography>
          <Typography 
            component="div" 
            sx={{ 
              fontSize: '0.75rem',
              mb: 1,
              animation: 'fadeIn 0.5s 0.3s both',
              color: stepColors.instructions
            }}
          >
            Thank you for choosing Medical Center for your care. Below are your instructions following your appendectomy on April 14, 2025:
          </Typography>
          <Box sx={{ fontSize: '0.75rem', pl: 2 }}>
            <Typography 
              component="div" 
              sx={{ 
                fontSize: '0.75rem', 
                mb: 0.5,
                animation: 'fadeIn 0.5s 0.6s both',
                color: stepColors.instructions
              }}
            >
              • Medication: Take Ibuprofen 400 mg every 6 hours for pain...
            </Typography>
            <Typography 
              component="div" 
              sx={{ 
                fontSize: '0.75rem',
                animation: 'fadeIn 0.5s 0.9s both',
                color: stepColors.instructions
              }}
            >
              • Rest for 48 hours; avoid lifting heavy objects...
            </Typography>
          </Box>
        </Box>
        
        {/* Figma-style instruction illustration */}
        <motion.div 
          className="mt-3 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" style={{ color: stepColors.instructions }} />
              <span className="text-sm font-medium" style={{ color: stepColors.instructions }}>Patient Instructions</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] text-green-600">Ready to send</span>
            </div>
          </div>
          
          <div className="border border-dashed border-blue-200 rounded-lg p-2 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-[10px] text-blue-600">1</span>
              </div>
              <span className="text-xs text-blue-800 font-medium">Rest & Recovery</span>
            </div>
            <div className="pl-7">
              <motion.div 
                className="h-2 bg-blue-50 rounded w-full mb-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div 
                className="h-2 bg-blue-50 rounded w-4/5"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
            </div>
          </div>
          
          <div className="border border-dashed border-blue-200 rounded-lg p-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-[10px] text-blue-600">2</span>
              </div>
              <span className="text-xs text-blue-800 font-medium">Medication Schedule</span>
            </div>
            <div className="pl-7">
              <motion.div 
                className="h-2 bg-blue-50 rounded w-full mb-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div 
                className="h-2 bg-blue-50 rounded w-3/4"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </Box>
    )
  },
  {
    id: "ehr",
    title: "Push Notes to EHR",
    icon: <Database size={30} style={{ color: stepColors.ehr }} />,
    description: "Secure integration with all EHR systems",
    color: stepColors.ehr,
    detailContent: () => (
      <Box sx={{ mt: 2 }}>
        <Typography 
          component="div"
          sx={{ fontSize: '0.8rem', mb: 1, textAlign: 'center', color: stepColors.ehr }}
        >
          All documents pushed to your preferred fields in your EHR
        </Typography>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            bgcolor: `${stepColors.ehr}05`,
            borderRadius: 1,
            border: `1px dashed ${stepColors.ehr}30`
          }}
        >
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1, 0.98]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2
            }}
            style={{ 
              fontSize: '0.8rem',
              textAlign: 'center',
              fontStyle: 'italic',
              color: stepColors.ehr
            }}
          >
            Secure integration with all EHR systems
          </motion.div>
        </Box>
        
        {/* Figma-style EHR illustration */}
        <motion.div 
          className="mt-3 bg-white rounded-lg shadow-sm p-3 border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-4 h-4" style={{ color: stepColors.ehr }} />
            <span className="text-sm font-medium" style={{ color: stepColors.ehr }}>EHR Integration</span>
          </div>
          
          <div className="space-y-3">
            <motion.div 
              className="p-2 rounded-lg bg-green-50 border border-green-100 relative overflow-hidden"
              animate={{ boxShadow: ['0 1px 3px rgba(0,0,0,0.1)', '0 3px 6px rgba(0,0,0,0.2)', '0 1px 3px rgba(0,0,0,0.1)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-200">
                  <FileText size={12} className="text-green-700" />
                </div>
                <div>
                  <div className="text-xs font-medium text-green-800">Clinical Note</div>
                  <div className="text-[10px] text-green-700">Successfully synced</div>
                </div>
                <CheckCircle size={16} className="text-green-600 ml-auto" />
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-green-300"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            
            <motion.div 
              className="p-2 rounded-lg bg-green-50 border border-green-100 relative overflow-hidden"
              animate={{ boxShadow: ['0 1px 3px rgba(0,0,0,0.1)', '0 3px 6px rgba(0,0,0,0.2)', '0 1px 3px rgba(0,0,0,0.1)'] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-200">
                  <TestTube size={12} className="text-green-700" />
                </div>
                <div>
                  <div className="text-xs font-medium text-green-800">Labs & Orders</div>
                  <div className="text-[10px] text-green-700">Successfully synced</div>
                </div>
                <CheckCircle size={16} className="text-green-600 ml-auto" />
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-green-300"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
            
            <motion.div 
              className="p-2 rounded-lg bg-green-50 border border-green-100 relative overflow-hidden"
              animate={{ boxShadow: ['0 1px 3px rgba(0,0,0,0.1)', '0 3px 6px rgba(0,0,0,0.2)', '0 1px 3px rgba(0,0,0,0.1)'] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-200">
                  <ClipboardList size={12} className="text-green-700" />
                </div>
                <div>
                  <div className="text-xs font-medium text-green-800">Referrals</div>
                  <div className="text-[10px] text-green-700">Successfully synced</div>
                </div>
                <CheckCircle size={16} className="text-green-600 ml-auto" />
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-green-300"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Box>
    )
  }
];

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [timerDisplay, setTimerDisplay] = useState<string>("00:00");
  
  const theme = useMuiTheme();
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  // Update timer when on the first step
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (currentStep === 0) {
      setRecordingTime(0);
      interval = setInterval(() => {
        setRecordingTime(prev => {
          const newTime = prev + 1;
          const minutes = Math.floor(newTime / 60);
          const seconds = newTime % 60;
          setTimerDisplay(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          return newTime;
        });
      }, 1000);
    } else {
      setRecordingTime(0);
      setTimerDisplay("00:00");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentStep]);

  // Auto-advance steps with improved timing
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
      }, isMobile ? 7000 : 6000); // Slightly longer time on mobile for better readability
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, isMobile]);

  // Handler for step clicks with haptic feedback simulation
  const handleStepClick = (index: number) => {
    setUserInteracted(true);
    setIsAutoPlaying(false);
    setCurrentStep(index);
    
    // For mobile, attempt to use vibration API if available
    if (typeof navigator !== 'undefined' && navigator.vibrate && isMobile) {
      try {
        navigator.vibrate(40); // Subtle feedback
      } catch (e) {
        console.log('Vibration not supported');
      }
    }
    
    // Resume auto-play after inactivity (20s on desktop, 30s on mobile)
    const inactivityTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, isMobile ? 30000 : 20000);
    
    return () => clearTimeout(inactivityTimer);
  };

  // Pause autoplay when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoPlaying(false);
      } else {
        // Only resume if user hasn't interacted
        if (!userInteracted) {
          setIsAutoPlaying(true);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userInteracted]);

  return (
    <Box 
      sx={{
        position: "relative",
        p: isMobile ? 2 : { xs: 2, sm: 3, md: 4 }, 
        bgcolor: "#ffffff",
        borderRadius: { xs: 1.5, sm: 2 },
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        width: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: "540px", lg: "560px" }, 
        margin: "0 auto",
        overflow: "hidden",
        transition: "all 0.3s ease"
      }}
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute w-32 h-32 rounded-full bg-blue-400 blur-3xl opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-24 h-24 rounded-full bg-pink-400 blur-3xl opacity-10 -translate-x-20 translate-y-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute w-24 h-24 rounded-full bg-teal-400 blur-3xl opacity-10 translate-x-16 -translate-y-12"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.12, 0.05] 
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <Box 
        sx={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 1.5 : 2,
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: { 
            xs: "420px", 
            sm: "450px",
            md: "500px",
            lg: "550px" 
          },
          position: "relative",
          zIndex: 1,
          px: isMobile ? 0.5 : 1, // Add horizontal padding for better mobile scrolling
          pb: 1, // Bottom padding for better scroll experience
          // Improved scrollbar styling for better UX
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.03)'
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.15)'
            }
          },
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.03)'
        }}
      >
        {workflowSteps.map((step, index) => {
          const isActive = currentStep === index;
          const isComplete = currentStep > index;

          return (
            <motion.div
              key={step.id}
              initial={false}
              animate={{ 
                opacity: isActive ? 1 : 0.7,
                y: 0,
                height: "auto",
                scale: isActive ? 1 : 0.99
              }}
              className={`relative rounded-lg ${isActive ? 'bg-gray-50/50' : ''} hover:bg-gray-50/30 transition-all duration-300`}
              onClick={() => handleStepClick(index)}
              style={{
                borderLeft: isActive ? `3px solid ${step.color}` : '3px solid transparent',
                overflow: 'visible',
                transformOrigin: 'center left'
              }}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.99, 
                transition: { duration: 0.1 }
              }}
              aria-label={`Step ${index + 1}: ${step.title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStepClick(index);
                  e.preventDefault();
                }
              }}
            >
              <motion.div
                className="flex flex-col gap-2 cursor-pointer p-3"
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: `${step.color}15`,
                      boxShadow: isActive ? `0 0 0 2px ${step.color}40` : 'none',
                      transition: "all 0.3s ease" 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={false}
                    animate={isActive ? {
                      scale: [1, 1.05, 1],
                      transition: { duration: 0.5, times: [0, 0.5, 1] }
                    } : {}}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-base md:text-lg font-semibold truncate" 
                      style={{ color: isActive ? step.color : '#333' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                  
                  {isActive && (
                    <div className="ml-auto">
                      <motion.div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: step.color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  )}
                </div>
                
                {/* Content area with improved transitions and accessibility */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.3 }}
                      className="ml-12 mb-2 mt-1"
                      style={{ overflow: 'visible' }}
                      role="region"
                      aria-label={`Details for ${step.title}`}
                    >
                      <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-visible">
                        {/* Pass the timerDisplay prop to step content */}
                        {step.detailContent({ timerDisplay })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </Box>

      {/* Enhanced step indicator dots with improved interaction and accessibility */}
      <div 
        className="flex justify-center gap-1.5 mt-4 pb-2" 
        role="tablist"
        aria-label="Workflow step navigation"
      >
        {workflowSteps.map((step, index) => (
          <button
            key={index}
            onClick={() => handleStepClick(index)}
            className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring-blue-500"
            style={{ 
              padding: isMobile ? '4px 2px' : '4px',  // Larger touch target for mobile 
              borderRadius: '4px',
              touchAction: 'manipulation' // Improves touch handling
            }}
            aria-label={`Go to step ${index + 1}: ${step.title}`}
            aria-current={currentStep === index ? "step" : undefined}
            role="tab"
          >
            <div 
              className={`rounded-full transition-all duration-300 ${currentStep === index ? 'w-4' : 'w-1.5'} h-1.5`}
              style={{ backgroundColor: currentStep === index ? step.color : '#e5e7eb' }}
            />
          </button>
        ))}
      </div>

      {/* Toggle button for autoplay (enhances user control) */}
      <div className="flex justify-center mt-2">
        <button
          onClick={() => setIsAutoPlaying(prev => !prev)}
          className={`text-xs flex items-center gap-1 px-2 py-1 rounded-full transition-colors 
          ${isAutoPlaying ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-500'}`}
          aria-pressed={isAutoPlaying}
          aria-label={isAutoPlaying ? "Pause animation" : "Play animation"}
        >
          {isAutoPlaying ? (
            <>
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> Auto
            </>
          ) : (
            <>
              <span className="w-2 h-2 bg-gray-400 rounded-full" /> Manual
            </>
          )}
        </button>
      </div>

      {/* Add the color pulse animation styles with improved mobile optimizations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            transform: translateX(-10px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scaleY(1);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1.5);
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }
        }

        /* Enhanced responsive styling with better fluid typography */
        @media (max-width: 640px) {
          .text-xs {
            font-size: 0.675rem;
          }
          .text-sm {
            font-size: 0.775rem;
          }
          .text-[10px] {
            font-size: 0.65rem;
          }
          .p-3 {
            padding: 0.65rem;
          }
          .gap-2 {
            gap: 0.375rem;
          }
          
          /* Improved touch targets for mobile */
          button, [role="button"] {
            min-height: 28px;
            min-width: 28px;
          }
        }
        
        /* Reduce motion preference support */
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Smooth scrolling for better UX */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        `
      }} />
    </Box>
  );
}
