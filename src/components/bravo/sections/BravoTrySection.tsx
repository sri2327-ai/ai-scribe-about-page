import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, TrendingUp, Clock, Users, DollarSign, ShieldCheck, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const outcomes = [
  { icon: Clock, title: '70% Less Hold Time', description: 'Patients connect instantly — no more waiting on hold for scheduling or questions.' },
  { icon: TrendingUp, title: '40% Fewer No-Shows', description: 'Automated reminders & confirmations keep your schedule full and predictable.' },
  { icon: DollarSign, title: '$150K+ Annual Savings', description: 'Reduce front-desk overhead while handling 3× more patient interactions.' },
  { icon: Users, title: '24/7 Patient Access', description: 'Every call answered, every message replied — even nights, weekends & holidays.' },
  { icon: HeartPulse, title: 'Higher Patient Satisfaction', description: 'Faster responses and seamless scheduling lead to happier, loyal patients.' },
  { icon: ShieldCheck, title: 'HIPAA-Compliant AI', description: 'Enterprise-grade security ensures every interaction meets compliance standards.' },
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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#143151]/[0.02] to-[#387E89]/[0.04]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-4">
            Two Ways to Try S10.AI
          </h2>
          <p className="text-lg text-[#387E89] max-w-2xl mx-auto">
            See how BRAVO transforms your front office — book a personalized demo or call us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* Left: Two ways */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Option A */}
            <Card className="border border-[#387E89]/20 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#143151] flex items-center justify-center text-white font-bold text-lg">A</div>
                  <h3 className="text-xl font-bold text-[#143151]">Book a Live Demo</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get a personalized 15-minute walkthrough with our team. See BRAVO handle real patient scenarios tailored to your specialty.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#387E89]" /> Free 15-minute consultation</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#387E89]" /> Custom implementation plan</li>
                  <li className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-[#387E89]" /> No setup fees or contracts</li>
                </ul>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Option B */}
            <Card className="border border-[#387E89]/20 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#387E89] flex items-center justify-center text-white font-bold text-lg">B</div>
                  <h3 className="text-xl font-bold text-[#143151]">Call BRAVO Directly</h3>
                </div>
                <p className="text-gray-600 mb-5">
                  Experience BRAVO as your patients would — fill in your details and we'll reveal the number to call our AI receptionist live.
                </p>

                {!showNumber ? (
                  <form onSubmit={handleRevealNumber} className="space-y-3">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className={errors.name ? 'border-red-400' : ''}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className={errors.email ? 'border-red-400' : ''}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Input
                        placeholder="Practice Name"
                        value={formData.practice}
                        onChange={e => setFormData(p => ({ ...p, practice: e.target.value }))}
                        className={errors.practice ? 'border-red-400' : ''}
                      />
                      {errors.practice && <p className="text-xs text-red-500 mt-1">{errors.practice}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full bg-[#387E89] hover:bg-[#2c6269] text-white">
                      <Phone className="mr-2 h-4 w-4" /> Reveal Phone Number
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-[#143151]/5 to-[#387E89]/10 border border-[#387E89]/20"
                  >
                    <Phone className="w-8 h-8 text-[#387E89] mx-auto mb-3" />
                    <p className="text-sm text-gray-500 mb-1">Call BRAVO Now</p>
                    <a
                      href="tel:+14155551234"
                      className="text-3xl font-bold text-[#143151] hover:text-[#387E89] transition-colors"
                    >
                      (415) 555-1234
                    </a>
                    <p className="text-xs text-gray-400 mt-2">Available 24/7 · HIPAA Compliant</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#143151] to-[#387E89] rounded-2xl p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Why Automate Patient Communication?
              </h3>
              <p className="text-white/70 mb-8 text-sm">
                Practices using BRAVO see measurable improvements across the board.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {outcomes.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
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
