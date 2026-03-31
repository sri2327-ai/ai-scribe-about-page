import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, TrendingUp, Clock, Users, DollarSign, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const outcomes = [
  { icon: Clock, title: '70% Less Hold Time', description: 'Patients get answers in seconds.' },
  { icon: TrendingUp, title: '40% Fewer No-Shows', description: 'Smart reminders keep chairs filled.' },
  { icon: DollarSign, title: '$150K+ Saved/Year', description: '3× more calls, zero extra FTEs.' },
  { icon: Users, title: '24/7 Coverage', description: 'Every call answered, every time.' },
  { icon: HeartPulse, title: '4.8★ Satisfaction', description: 'Faster service, happier patients.' },
  { icon: ShieldCheck, title: 'HIPAA Compliant', description: 'SOC 2 Type II certified.' },
];

const BravoTrySection = memo(() => {
  const [formData, setFormData] = useState({ name: '', email: '', practice: '' });
  const [showNumber, setShowNumber] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.practice.trim()) newErrors.practice = 'Practice name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRevealNumber = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setShowNumber(true);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/[0.02] to-[#387E89]/[0.04]" />
      <div className="container mx-auto px-4 sm:px-6 relative h-full flex flex-col justify-center py-6">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#387E89]/10 text-[#387E89] text-xs font-medium mb-2">
            No Commitment · Results in Minutes
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#143151] mb-1.5">
            Experience BRAVO — Your Way
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Guided walkthrough or hear BRAVO live — getting started takes under 2 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto flex-1 min-h-0">
          {/* Left: Two options — 2 of 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-3 sm:gap-4"
          >
            {/* Option A — Book Demo */}
            <div className="group rounded-xl border border-[#387E89]/15 p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#387E89]/30 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-full bg-[#143151] flex items-center justify-center text-white font-bold text-xs shrink-0">A</div>
                <h3 className="text-sm sm:text-base font-bold text-[#143151]">Book a Live Demo</h3>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                15-min call — see BRAVO handle real patient scenarios for your specialty.
              </p>
              <ul className="space-y-1.5 mb-3 text-xs text-gray-600">
                <li className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#387E89] shrink-0" /> Free consultation</li>
                <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#387E89] shrink-0" /> Custom implementation plan</li>
                <li className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-[#387E89] shrink-0" /> No setup fees or contracts</li>
              </ul>
              <Button
                size="sm"
                className="w-full rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white text-xs sm:text-sm h-9 mt-auto"
                onClick={() => window.open('/contact', '_blank')}
              >
                Book a Demo <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Option B — Call */}
            <div className="group rounded-xl border border-[#387E89]/15 p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#387E89]/30 flex-1 flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-full bg-[#387E89] flex items-center justify-center text-white font-bold text-xs shrink-0">B</div>
                <h3 className="text-sm sm:text-base font-bold text-[#143151]">Call BRAVO Directly</h3>
              </div>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Experience it as your patients would — schedule, ask questions, or request a refill.
              </p>

              {!showNumber ? (
                <form onSubmit={handleRevealNumber} className="space-y-2 mt-auto">
                  {(['name', 'email', 'practice'] as const).map((field) => (
                    <div key={field}>
                      <Input
                        placeholder={field === 'name' ? 'Your Name' : field === 'email' ? 'Email Address' : 'Practice Name'}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                        className={`h-8 text-xs ${errors[field] ? 'border-red-400 focus-visible:ring-red-300' : 'border-gray-200'}`}
                      />
                      {errors[field] && <p className="text-[10px] text-red-500 mt-0.5">{errors[field]}</p>}
                    </div>
                  ))}
                  <Button type="submit" size="sm" className="w-full rounded-full bg-[#387E89] hover:bg-[#2c6269] text-white text-xs sm:text-sm h-9">
                    <Phone className="mr-1.5 h-3.5 w-3.5" /> Reveal Phone Number
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 px-3 rounded-lg bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 border border-[#387E89]/20 mt-auto"
                >
                  <div className="w-9 h-9 rounded-full bg-[#387E89]/10 flex items-center justify-center mx-auto mb-2">
                    <Phone className="w-4 h-4 text-[#387E89]" />
                  </div>
                  <p className="text-xs text-gray-500 mb-0.5">Call BRAVO Now</p>
                  <a href="tel:+14155551234" className="text-xl sm:text-2xl font-bold text-[#143151] hover:text-[#387E89] transition-colors">
                    (415) 555-1234
                  </a>
                  <p className="text-[10px] text-gray-400 mt-1">Available 24/7 · HIPAA Compliant</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right: Outcomes — 3 of 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3 min-h-0"
          >
            <div className="bg-gradient-to-br from-[#143151] to-[#387E89] rounded-xl p-5 sm:p-6 md:p-7 text-white h-full flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">
                What Changes When BRAVO Answers
              </h3>
              <p className="text-white/60 mb-4 text-xs">
                Real outcomes from practices — measured within 90 days.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 flex-1">
                {outcomes.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.2 + i * 0.04 }}
                    viewport={{ once: true }}
                    className="flex gap-2.5 p-2.5 sm:p-3 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] transition-all duration-200"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm leading-tight">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs text-white/65 leading-snug mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>100+ practices</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>Setup in 48 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

BravoTrySection.displayName = 'BravoTrySection';

export { BravoTrySection };
