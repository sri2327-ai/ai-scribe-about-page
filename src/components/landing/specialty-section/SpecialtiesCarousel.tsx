
import React, { useState } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { 
  Brain, User, Heart, Eye, 
  Building2, FlaskConical, Apple, Ambulance, 
  CircleDot, Stethoscope, Droplets, Activity, 
  HeartPulse, Ear, Microscope, ShieldPlus, 
  Syringe, Bone, Dna, 
  Pill, Baby, Scissors,
  MoreHorizontal, Utensils, Footprints, UserRound,
  Users, Spline, Bandage
} from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const allSpecialties = [
  { name: "Cardiology", icon: Heart, complex: true },
  { name: "Neurology", icon: Brain, complex: true },
  { name: "Pulmonology", icon: Activity, complex: true },
  { name: "Endocrinology", icon: Microscope, complex: true },
  { name: "Oncology", icon: FlaskConical, complex: true, highlight: true },
  { name: "Rheumatology", icon: Bone, complex: true },
  { name: "Gastroenterology", icon: Utensils, complex: true, highlight: true },
  { name: "Nephrology", icon: Droplets, complex: true },
  { name: "Hematology", icon: FlaskConical, complex: true },
  { name: "Infectious Disease", icon: Pill, complex: true },
  { name: "Orthopedics", icon: Bone, highlight: true },
  { name: "Urology", icon: Droplets },
  { name: "Pediatrics", icon: User, highlight: true },
  { name: "Ophthalmology", icon: Eye, complex: true, highlight: true },
  { name: "Hospital Medicine", icon: Building2 },
  { name: "Gynecology", icon: HeartPulse },
  { name: "Psychiatry", icon: Brain, highlight: true },
  { name: "Geriatrics", icon: Activity },
  { name: "Emergency Medicine", icon: Ambulance },
  { name: "Hepatology", icon: CircleDot },
  { name: "Internal Medicine", icon: Pill, highlight: true },
  { name: "Urgent Care", icon: HeartPulse },
  { name: "ENT", icon: Ear, highlight: true },
  { name: "Dermatology", icon: ShieldPlus },
  { name: "Immunology", icon: Dna },
  { name: "Surgery", icon: Scissors },
  { name: "Neonatology", icon: Baby },
  { name: "Pain Management", icon: Activity },
  { name: "Allergy", icon: Syringe },
  { name: "Chiropractor", icon: Spline, highlight: true },
  { name: "Functional Medicine", icon: Activity, highlight: true },
  { name: "Podiatry", icon: Footprints, highlight: true },
  { name: "Therapist", icon: UserRound, highlight: true }
];

const SpecialtyCard = ({ specialty, IconComponent }) => (
  <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFF',
      borderRadius: 2.5,
      py: { xs: 1.5, sm: 2 },
      px: { xs: 0.5, sm: 1 },
      minWidth: '100%',
      height: '100%',
      boxShadow: '0 2px 10px 0 rgba(0,0,0,0.04)',
      border: specialty.complex ? '1px solid #387E89' : '1px solid #E0E0E0',
      gap: { xs: 0.5, sm: 1 },
      transition: 'transform 0.23s, box-shadow 0.22s',
      "&:hover": {
        transform: 'translateY(-4px) scale(1.025)',
        boxShadow: '0 6px 22px 0 rgba(56,126,137,0.10)'
      }
    }}
  >
    <div className="flex items-center justify-center">
      <IconComponent 
        size="100%" 
        color={specialty.complex ? "#387E89" : "#143151"} 
        className="responsive-icon w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px]"
      />
    </div>
    <Typography 
      variant="body1" 
      sx={{ 
        textAlign: 'center',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #143151, #387E89)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
        mt: 0.5,
        lineHeight: 1.2
      }}
    >
      {specialty.name}
    </Typography>
  </Box>
);

export const SpecialtiesCarousel = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const initialSpecialties = allSpecialties
    .filter(specialty => specialty.highlight || allSpecialties.indexOf(specialty) < 14)
    .slice(0, 18);

  return (
    <section 
      className="mt-6 sm:mt-8 md:mt-10 max-w-[1400px] mx-auto"
      aria-labelledby="medical-specialties-heading"
    >
      {/* Enhanced SEO-friendly content for search engines */}
      <div className="sr-only">
        <h1 id="medical-specialties-heading">AI Solutions Specialized for Every Medical Field</h1>
        <p>
          S10.AI provides specialized artificial intelligence solutions tailored for over 30 medical specialties, 
          ensuring that each healthcare field receives customized AI assistance that understands specialty-specific 
          workflows, terminology, and documentation requirements.
        </p>
        
        {/* Comprehensive Medical Specialties Coverage */}
        <section>
          <h2>Complete Medical Specialty AI Coverage</h2>
          <p>
            Our AI technology adapts to the unique requirements of each medical specialty, providing 
            specialized documentation, workflow automation, and clinical decision support tailored 
            to specific healthcare disciplines.
          </p>
          
          {/* Complex Medical Specialties */}
          <article>
            <h3>Complex Medical Specialties with Advanced AI Support</h3>
            <p>These specialties benefit from our most sophisticated AI models with enhanced clinical reasoning:</p>
            
            <h4>Cardiology AI Solutions</h4>
            <p>Specialized AI for cardiac care documentation, EKG interpretation support, cardiac catheterization notes, and heart failure management protocols.</p>
            
            <h4>Neurology AI Documentation</h4>
            <p>Advanced AI for neurological assessments, seizure documentation, movement disorder tracking, and cognitive evaluation notes.</p>
            
            <h4>Pulmonology AI Assistant</h4>
            <p>Respiratory care AI with pulmonary function test integration, ventilator management, and chronic lung disease monitoring.</p>
            
            <h4>Endocrinology AI Support</h4>
            <p>Diabetes management AI, hormone therapy tracking, thyroid disorder documentation, and metabolic syndrome care protocols.</p>
            
            <h4>Oncology AI Documentation</h4>
            <p>Cancer care AI with chemotherapy protocols, tumor board documentation, treatment response tracking, and survivorship care plans.</p>
            
            <h4>Rheumatology AI Tools</h4>
            <p>Autoimmune disease management AI, joint assessment documentation, biologic therapy tracking, and inflammatory marker monitoring.</p>
            
            <h4>Gastroenterology AI Assistant</h4>
            <p>Digestive health AI with endoscopy reporting, inflammatory bowel disease management, and liver function monitoring.</p>
            
            <h4>Nephrology AI Support</h4>
            <p>Kidney care AI with dialysis management, chronic kidney disease progression tracking, and transplant care coordination.</p>
            
            <h4>Hematology AI Documentation</h4>
            <p>Blood disorder AI with coagulation studies, anemia workup protocols, and hematologic malignancy management.</p>
            
            <h4>Infectious Disease AI Tools</h4>
            <p>Antimicrobial stewardship AI, infection control protocols, and complex infectious disease management.</p>
            
            <h4>Ophthalmology AI Assistant</h4>
            <p>Eye care AI with retinal imaging integration, glaucoma monitoring, and surgical procedure documentation.</p>
          </article>
          
          {/* Primary Care and General Specialties */}
          <article>
            <h3>Primary Care and General Medical Specialties</h3>
            <p>Essential AI support for frontline healthcare providers:</p>
            
            <h4>Internal Medicine AI Solutions</h4>
            <p>Comprehensive primary care AI with preventive care reminders, chronic disease management, and annual physical documentation.</p>
            
            <h4>Pediatrics AI Documentation</h4>
            <p>Child healthcare AI with growth tracking, vaccination schedules, developmental milestone monitoring, and pediatric-specific templates.</p>
            
            <h4>Psychiatry AI Support</h4>
            <p>Mental health AI with mood assessment tools, medication management, and therapy session documentation.</p>
            
            <h4>Hospital Medicine AI Assistant</h4>
            <p>Inpatient care AI with admission documentation, discharge planning, and hospital workflow optimization.</p>
            
            <h4>Emergency Medicine AI Tools</h4>
            <p>Emergency care AI with triage documentation, trauma protocols, and rapid assessment templates.</p>
            
            <h4>Urgent Care AI Solutions</h4>
            <p>Immediate care AI with common complaint protocols, minor procedure documentation, and quick assessment tools.</p>
            
            <h4>ENT AI Documentation</h4>
            <p>Ear, nose, and throat AI with hearing assessment tools, sinus procedure notes, and allergy management.</p>
          </article>
          
          {/* Surgical and Procedural Specialties */}
          <article>
            <h3>Surgical and Procedural Specialties</h3>
            <p>Specialized AI for surgical and procedural healthcare disciplines:</p>
            
            <h4>Orthopedics AI Support</h4>
            <p>Musculoskeletal AI with surgical planning, joint replacement protocols, and sports medicine documentation.</p>
            
            <h4>Surgery AI Documentation</h4>
            <p>General surgery AI with operative reports, pre-operative assessments, and post-operative care plans.</p>
            
            <h4>Urology AI Tools</h4>
            <p>Urological care AI with prostate health monitoring, kidney stone management, and urological procedure documentation.</p>
            
            <h4>Gynecology AI Assistant</h4>
            <p>Women's health AI with reproductive health tracking, prenatal care, and gynecological procedure notes.</p>
            
            <h4>Dermatology AI Solutions</h4>
            <p>Skin care AI with lesion documentation, dermatological procedure notes, and cosmetic treatment tracking.</p>
          </article>
          
          {/* Specialized and Alternative Medicine */}
          <article>
            <h3>Specialized and Alternative Medicine AI Support</h3>
            <p>AI solutions for specialized and alternative healthcare approaches:</p>
            
            <h4>Functional Medicine AI Tools</h4>
            <p>Holistic care AI with comprehensive health assessments, nutritional protocols, and integrative treatment plans.</p>
            
            <h4>Chiropractor AI Documentation</h4>
            <p>Chiropractic care AI with spinal assessment tools, treatment protocols, and progress tracking.</p>
            
            <h4>Podiatry AI Support</h4>
            <p>Foot and ankle care AI with diabetic foot monitoring, wound care documentation, and biomechanical assessments.</p>
            
            <h4>Therapist AI Assistant</h4>
            <p>Therapy session AI with treatment planning, progress notes, and outcome measurement tools.</p>
            
            <h4>Neonatology AI Documentation</h4>
            <p>Newborn care AI with NICU protocols, growth monitoring, and developmental assessments.</p>
            
            <h4>Pain Management AI Tools</h4>
            <p>Pain care AI with medication management, procedure documentation, and pain scale tracking.</p>
            
            <h4>Allergy and Immunology AI Support</h4>
            <p>Allergy care AI with allergen testing documentation, immunotherapy tracking, and reaction monitoring.</p>
            
            <h4>Geriatrics AI Solutions</h4>
            <p>Elder care AI with cognitive assessments, medication reconciliation, and age-specific health monitoring.</p>
            
            <h4>Hepatology AI Documentation</h4>
            <p>Liver care AI with hepatitis management, cirrhosis monitoring, and liver transplant protocols.</p>
          </article>
          
          {/* Universal Compatibility */}
          <article>
            <h3>Universal AI Compatibility for All Medical Fields</h3>
            <p>
              While we showcase specific specialties, S10.AI's adaptive AI technology can be customized for any medical field, 
              including emerging specialties and subspecialties. Our AI learns from your practice patterns and adapts to 
              specialty-specific terminology, workflows, and documentation requirements.
            </p>
            
            <h4>Custom AI Training for Any Specialty</h4>
            <p>
              Don't see your specialty listed? S10.AI can be trained and customized for any medical field, including:
              niche subspecialties, emerging medical disciplines, research-focused practices, and unique healthcare delivery models.
            </p>
            
            <h4>Adaptive Learning Technology</h4>
            <p>
              Our AI continuously learns from your practice patterns, terminology, and workflows to provide increasingly 
              accurate and relevant assistance tailored to your specific medical specialty and practice style.
            </p>
          </article>
        </section>
        
        {/* Implementation and Integration */}
        <section>
          <h2>Specialty-Specific Implementation</h2>
          <p>
            Each medical specialty receives customized AI implementation that respects the unique aspects of their practice:
          </p>
          
          <ul>
            <li>Specialty-specific documentation templates and workflows</li>
            <li>Medical terminology and abbreviation recognition for each field</li>
            <li>Integration with specialty-specific EHR systems and tools</li>
            <li>Compliance with specialty-specific regulatory requirements</li>
            <li>Custom training on specialty protocols and best practices</li>
            <li>Ongoing optimization based on specialty feedback and outcomes</li>
          </ul>
        </section>
      </div>

      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: "center",
          color: "#000",
          fontWeight: 800,
          mb: { xs: 1, md: 2 },
          fontSize: { xs: "1.55rem", sm: "2.05rem", md: "2.35rem" },
          letterSpacing: "-0.04em"
        }}
      >
        Specialized for Every Medical Field
      </Typography>

      <div className="flex justify-center mb-4">
        <Badge 
          variant="outline" 
          className="text-sm sm:text-base px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200"
        >
          Works with any medical specialty, even those not listed
        </Badge>
      </div>
      
      <Box sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        <ResponsiveCarousel
          items={initialSpecialties}
          columnsDesktop={6}
          columnsTablet={4}
          columnsMobile={3}
          gap={8}
          showControls={true}
          itemWidth={{ xs: 90, sm: 120, md: 140 }}
          itemHeight={{ xs: 90, sm: 100, md: 115 }}
          cardClassName="flex flex-col items-center justify-center h-full"
          autoPlay={true}
          autoPlayInterval={3500}
          controlsBelow={true}
          renderItem={(specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <SpecialtyCard specialty={specialty} IconComponent={IconComponent} />
            );
          }}
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 4 } }}>
          <Button 
            variant="outlined" 
            onClick={() => setIsDialogOpen(true)}
            sx={{
              borderColor: '#387E89',
              color: '#143151',
              borderRadius: '24px',
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 0.75, md: 1 },
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              '&:hover': {
                borderColor: '#143151',
                backgroundColor: 'rgba(56,126,137,0.04)'
              }
            }}
            startIcon={<MoreHorizontal size={18} />}
          >
            View All Specialties
          </Button>
        </Box>
      </Box>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-4 border-b sticky top-0 bg-white z-10">
            <DialogTitle className="text-xl md:text-2xl font-bold text-center text-gray-800">
              All Medical Specialties
            </DialogTitle>
            <p className="text-center text-gray-500 text-sm mt-1">
              CRUSH AI adapts to any medical specialty's unique documentation requirements
            </p>
          </DialogHeader>
          <ScrollArea className="h-[60vh] md:h-[70vh]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 md:p-4 lg:p-5">
              {allSpecialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 ${specialty.complex ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}
                  >
                    <IconComponent 
                      size={20} 
                      className={specialty.complex ? 'text-blue-600 flex-shrink-0' : 'text-gray-700 flex-shrink-0'}
                    />
                    <span className="ml-2 font-medium text-sm md:text-base">
                      {specialty.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="p-4 mt-2 bg-gradient-to-r from-blue-50 to-teal-50 mx-4 mb-4 rounded-lg border border-blue-100">
              <p className="text-center font-medium text-blue-800">
                Don't see your specialty? CRUSH AI can be customized for <span className="underline">any medical field</span>.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <style>
        {`
        .responsive-icon {
          width: auto;
          height: auto;
        }
        @media (max-width: 600px) {
          .responsive-icon {
            width: 20px;
            height: 20px;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .responsive-icon {
            width: 24px;
            height: 24px;
          }
        }
        @media (min-width: 901px) {
          .responsive-icon {
            width: 26px;
            height: 26px;
          }
        }
        `}
      </style>
    </section>
  );
};
