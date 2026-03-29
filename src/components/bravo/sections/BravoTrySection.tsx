import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, TrendingUp, Clock, Users, DollarSign, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const outcomes = [
  { icon: Clock, title: '70% Less Hold Time', description: 'Zero hold music. Patients get answers in seconds, not minutes.' },
  { icon: TrendingUp, title: '40% Fewer No-Shows', description: 'Smart reminders + easy rescheduling keep your chairs filled.' },
  { icon: DollarSign, title: '$150K+ Saved Per Year', description: 'Handle 3× more calls without adding a single FTE.' },
  { icon: Users, title: '24/7 — Never Miss a Call', description: 'Nights, weekends, holidays. Every call answered, every time.' },
  { icon: HeartPulse, title: '4.8★ Patient Satisfaction', description: 'Faster service = happier patients who stay and refer.' },
  { icon: ShieldCheck, title: 'HIPAA-Compliant & Secure', description: 'SOC 2 Type II certified. Your data stays protected.' },
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/[0.02] to-[#387E89]/[0.04]" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#387E89]/10 text-[#387E89] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            No Commitment · See Results in Minutes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-3 sm:mb-4">
            Experience BRAVO — Your Way
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you prefer a guided walkthrough or want to hear BRAVO in action yourself, getting started takes under 2 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {/* Left: Two ways — takes 2 of 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {/* Option A */}
            <div className="group rounded-2xl border border-[#387E89]/15 p-5 sm:p-6 md:p-7 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#387E89]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#143151] flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">A</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#143151]">Book a Live Demo</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                A 15-minute call with our team. We'll show you BRAVO handling real patient scenarios tailored to your specialty.
              </p>
              <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-600">
                <li className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#387E89] shrink-0" /> Free 15-minute consultation</li>
                <li className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#387E89] shrink-0" /> Custom implementation plan</li>
                <li className="flex items-center gap-2"><DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#387E89] shrink-0" /> No setup fees or contracts</li>
              </ul>
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white text-sm sm:text-base h-10 sm:h-11"
                onClick={() => window.open('/contact', '_blank')}
              >
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Option B */}
            <div className="group rounded-2xl border border-[#387E89]/15 p-5 sm:p-6 md:p-7 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#387E89]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#387E89] flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">B</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#143151]">Call BRAVO Directly</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                Call BRAVO right now and experience it as your patients would — schedule an appointment, ask a question, or request a refill.
              </p>

              {!showNumber ? (
                <form onSubmit={handleRevealNumber} className="space-y-2.5 sm:space-y-3">
                  {(['name', 'email', 'practice'] as const).map((field) => (
                    <div key={field}>
                      <Input
                        placeholder={field === 'name' ? 'Your Name' : field === 'email' ? 'Email Address' : 'Practice Name'}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={e => setFormData(p => ({ ...p, [field]: e.target.value }))}
                        className={`h-9 sm:h-10 text-sm ${errors[field] ? 'border-red-400 focus-visible:ring-red-300' : 'border-gray-200'}`}
                      />
                      {errors[field] && <p className="text-[11px] text-red-500 mt-0.5">{errors[field]}</p>}
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
                  className="text-center py-5 sm:py-6 px-4 rounded-xl bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 border border-[#387E89]/20"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#387E89]/10 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#387E89]" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Call BRAVO Now</p>
                  <a
                    href="tel:+14155551234"
                    className="text-2xl sm:text-3xl font-bold text-[#143151] hover:text-[#387E89] transition-colors"
                  >
                    (415) 555-1234
                  </a>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2">Available 24/7 · HIPAA Compliant</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right: Outcomes — takes 3 of 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-[#143151] to-[#387E89] rounded-2xl p-6 sm:p-8 md:p-10 text-white h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2">
                What Changes When BRAVO Answers Your Phones
              </h3>
              <p className="text-white/60 mb-6 sm:mb-8 text-xs sm:text-sm">
                Real outcomes from practices that switched — measured within 90 days.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
                {outcomes.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    viewport={{ once: true }}
                    className="flex gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] transition-all duration-200 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm mb-0.5 truncate">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs text-white/65 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Trusted by 100+ practices</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Setup in under 48 hours</span>
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
