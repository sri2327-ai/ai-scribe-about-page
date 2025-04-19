
import React from 'react';
import { CAHeroSection } from '@/components/custom-ai-agent/CAHeroSection';
import { CABentoGrid } from '@/components/custom-ai-agent/CABentoGrid';
import { CAWhyChooseSection } from '@/components/custom-ai-agent/CAWhyChooseSection';
import { CARoleBenefits } from '@/components/custom-ai-agent/CARoleBenefits';
import { CATransformWorkflow } from '@/components/custom-ai-agent/CATransformWorkflow';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { customAIAgentColors } from '@/theme/custom-ai-agent-theme';
import { CABeforeAfterCarousel } from '@/components/custom-ai-agent/CABeforeAfterCarousel';

const CustomAIAgent = () => {
  return <div className="bg-white min-h-screen">
      <CAHeroSection />
      <CABentoGrid />
      <CAWhyChooseSection />
      <CARoleBenefits />
      <CATransformWorkflow />
      <CABeforeAfterCarousel />

      <section className="py-20 bg-gray-50" style={{
      backgroundColor: customAIAgentColors.background.light
    }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{
            color: customAIAgentColors.primary
          }}>
              How Custom AI Agents Transform Your Practice
            </h2>
            <p className="text-lg mb-12" style={{
            color: customAIAgentColors.text.secondary
          }}>
              Imagine an AI that feels like it was built just for you. Our Custom AI Agents tackle the workflows that standard tools overlook, delivering measurable impact across specialties. Here's how they work:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{
                  backgroundColor: `${customAIAgentColors.tertiary}50`
                }}>
                    <span className="text-xl font-bold" style={{
                    color: customAIAgentColors.primary
                  }}>1️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{
                  color: customAIAgentColors.primary
                }}>Discover Your Needs</h3>
                  <p style={{
                  color: customAIAgentColors.text.secondary
                }}>
                    We start with a consultative session to pinpoint your practice's unique challenges—whether it's automating prior authorizations for neurology or triaging dermatology referrals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{
                  backgroundColor: `${customAIAgentColors.tertiary}50`
                }}>
                    <span className="text-xl font-bold" style={{
                    color: customAIAgentColors.primary
                  }}>2️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{
                  color: customAIAgentColors.primary
                }}>Build Your Agent</h3>
                  <p style={{
                  color: customAIAgentColors.text.secondary
                }}>
                    Using IPKO's advanced AI, we craft a bespoke agent tailored to your workflow, trained on your specialty's terminology, protocols, and goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{
                  backgroundColor: `${customAIAgentColors.tertiary}50`
                }}>
                    <span className="text-xl font-bold" style={{
                    color: customAIAgentColors.primary
                  }}>3️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{
                  color: customAIAgentColors.primary
                }}>Seamless Deployment</h3>
                  <p style={{
                  color: customAIAgentColors.text.secondary
                }}>
                    Your agent integrates with your existing systems in under a week, syncing with CRUSH's real-time notes and BRAVO's patient engagement tools for a cohesive experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4" style={{
                  backgroundColor: `${customAIAgentColors.tertiary}50`
                }}>
                    <span className="text-xl font-bold" style={{
                    color: customAIAgentColors.primary
                  }}>4️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{
                  color: customAIAgentColors.primary
                }}>Ongoing Optimization</h3>
                  <p style={{
                  color: customAIAgentColors.text.secondary
                }}>
                    Our team monitors performance, refining your agent to ensure it evolves with your practice, delivering consistent efficiency and accuracy.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-12">
              <Button className="px-8 py-6 text-lg rounded-md" style={{
              backgroundColor: customAIAgentColors.secondary,
              color: customAIAgentColors.text.white
            }}>
                See It in Action: Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{
              color: customAIAgentColors.primary
            }}>
                Join Top Clinics Transforming Care with S10.AI
              </h3>
              <p className="text-lg mb-8" style={{
              color: customAIAgentColors.secondary
            }}>
                Optimize your practice with Custom AI Agents
              </p>
              <Button className="px-8 py-6 text-lg rounded-md" style={{
              backgroundColor: customAIAgentColors.secondary,
              color: customAIAgentColors.text.white
            }}>
                Book a Demo Today!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default CustomAIAgent;
