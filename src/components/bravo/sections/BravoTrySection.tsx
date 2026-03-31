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
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#387E89]/10 text-[#387E89] text-sm font-medium mb-3">
            No Commitment · Results in Minutes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-3">
            Experience BRAVO — Your Way
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Guided walkthrough or hear BRAVO live — getting started takes under 2 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Left: Two options — 2 of 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-5"
          >
            {/* Option A — Book Demo */}
            <div className="group rounded-2xl border border-[#387E89]/15 p-5 sm:p-6 md:p-7 bg-white shadow-sm hover:shadow-lg transition-all duration-200 hover:border-[#387E89]/30 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#143151] flex items-center justify-center text-white font-bold text-sm shrink-0">A</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#143151]">Book a Live Demo</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                15-min call — see BRAVO handle real patient scenarios for your specialty.
              </p>
              <ul className="space-y-2 mb-5 text-sm text-gray-600">
                <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#387E89] shrink-0" /> Free consultation</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#387E89] shrink-0" /> Custom implementation plan</li>
                <li className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-[#387E89] shrink-0" /> No setup fees or contracts</li>
              </ul>
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white text-sm sm:text-base h-10 sm:h-11 mt-auto"
                onClick={() => window.open('/contact', '_blank')}
              >
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Option B — Call */}
            <div className="group rounded-2xl border border-[#387E89]/15 p-5 sm:p-6 md:p-7 bg-white shadow-sm hover:shadow-lg transition-all duration-200 hover:border-[#387E89]/30 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#387E89] flex items-center justify-center text-white font-bold text-sm shrink-0">B</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#143151]">Call BRAVO Directly</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Experience it as your patients would — schedule, ask questions, or request a refill.
              </p>

              {!showNumber ? (
                <form onSubmit={handleRevealNumber} className="space-y-2.5 mt-auto">
                  {(['name', 'email', 'practice'] as const).map((field) => (
                    <div key={field}>
                      <Input
                        placeholder={field === 'name' ? 'Your Name' : field === 'email' ? 'Email Address' : 'Practice Name'}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                        className={`h-10 text-sm ${errors[field] ? 'border-red-400 focus-visible:ring-red-300' : 'border-gray-200'}`}
                      />
                      {errors[field] && <p className="text-xs text-red-500 mt-0.5">{errors[field]}</p>}
                    </div>
                  ))}
                  <Button type="submit" size="lg" className="w-full rounded-full bg-[#387E89] hover:bg-[#2c6269] text-white text-sm sm:text-base h-10 sm:h-11">
                    <Phone className="mr-2 h-4 w-4" /> Reveal Phone Number
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-5 sm:py-6 px-4 rounded-xl bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 border border-[#387E89]/20 mt-auto"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#387E89]/10 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#387E89]" />
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Call BRAVO Now</p>
                  <a href="tel:+14155551234" className="text-2xl sm:text-3xl font-bold text-[#143151] hover:text-[#387E89] transition-colors">
                    (415) 555-1234
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Available 24/7 · HIPAA Compliant</p>
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
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-[#143151] to-[#387E89] rounded-2xl p-6 sm:p-8 md:p-10 text-white h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                What Changes When BRAVO Answers
              </h3>
              <p className="text-white/60 mb-6 sm:mb-8 text-sm">
                Real outcomes from practices — measured within 90 days.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
                {outcomes.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.2 + i * 0.04 }}
                    viewport={{ once: true }}
                    className="flex gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base leading-tight">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-white/65 leading-relaxed mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-4 sm:gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Trusted by 100+ practices</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
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
