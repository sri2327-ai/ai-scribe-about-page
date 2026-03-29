import React, { useState, useEffect, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Clock, CalendarCheck, TrendingUp, Users, PhoneCall } from 'lucide-react';

interface ROICalculatorProps {
  onCalculate?: (data: { monthly: number; yearly: number; multiplier: number }) => void;
}

/*
 * ── ROI CALCULATION LOGIC ──
 *
 * 1. CALLS PER DAY × 260 WORKING DAYS = yearly call volume
 * 2. Each call averages [avgDuration] minutes of staff time
 * 3. Staff cost assumed at $22/hr (national avg for medical receptionist)
 * 4. BRAVO automates ~75% of routine calls (scheduling, refills, follow-ups)
 * 5. Annual ROI = (yearly calls × automation rate × avg duration in hrs × hourly cost)
 *               + (no-show reduction savings from automated reminders)
 * 6. Total cost saved = ROI - BRAVO subscription estimate ($299/mo/clinician)
 * 7. Hours saved = automated calls × avg duration
 * 8. Staff capacity freed = hours saved converted to FTE equivalent (2080 hrs/yr)
 */

const STAFF_HOURLY_COST = 22; // $/hr national avg medical receptionist
const AUTOMATION_RATE = 0.75; // 75% of calls handled by BRAVO
const WORKING_DAYS_PER_YEAR = 260;
const NO_SHOW_REDUCTION = 0.40; // 40% reduction in no-shows
const AVG_APPOINTMENT_VALUE = 150; // $ per appointment
const CURRENT_NO_SHOW_RATE = 0.18; // industry average 18%
const FTE_HOURS_PER_YEAR = 2080;

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onCalculate }) => {
  const [callsPerDay, setCallsPerDay] = useState(40);
  const [clinicians, setClinicians] = useState(3);
  const [avgCallDuration, setAvgCallDuration] = useState(4); // minutes

  const roi = useMemo(() => {
    const yearlyCallVolume = callsPerDay * WORKING_DAYS_PER_YEAR;
    const automatedCalls = Math.round(yearlyCallVolume * AUTOMATION_RATE);

    // Staff time savings
    const hoursAutomated = automatedCalls * (avgCallDuration / 60);
    const staffCostSaved = hoursAutomated * STAFF_HOURLY_COST;

    // No-show recovery (per clinician: ~20 appts/week × 50 weeks × no-show rate × reduction × value)
    const yearlyAppts = clinicians * 20 * 50;
    const recoveredAppts = Math.round(yearlyAppts * CURRENT_NO_SHOW_RATE * NO_SHOW_REDUCTION);
    const noShowRevenue = recoveredAppts * AVG_APPOINTMENT_VALUE;

    const annualROI = Math.round(staffCostSaved + noShowRevenue);
    const totalCostSaved = Math.round(staffCostSaved);
    const totalHoursSaved = Math.round(hoursAutomated);
    const hoursPerWeek = hoursAutomated / 50; // 50 working weeks

    return { annualROI, totalCostSaved, totalHoursSaved, recoveredAppts, hoursPerWeek, automatedCalls };
  }, [callsPerDay, clinicians, avgCallDuration]);

  useEffect(() => {
    onCalculate?.({
      monthly: roi.annualROI / 12,
      yearly: roi.annualROI,
      multiplier: roi.annualROI > 0 ? roi.annualROI / 100000 : 0,
    });
  }, [roi.annualROI, onCalculate]);

  const resultCards = [
    {
      icon: DollarSign,
      value: `$${roi.annualROI.toLocaleString()}`,
      label: 'Annual ROI',
      accent: 'from-[#143151]/10 to-[#387E89]/10',
      iconBg: 'bg-[#143151]/10',
      iconColor: 'text-[#143151]',
    },
    {
      icon: TrendingUp,
      value: `$${roi.totalCostSaved.toLocaleString()}`,
      label: 'Total cost saved each year',
      accent: 'from-[#387E89]/10 to-[#5192AE]/10',
      iconBg: 'bg-[#387E89]/10',
      iconColor: 'text-[#387E89]',
    },
    {
      icon: Clock,
      value: roi.totalHoursSaved.toLocaleString(),
      label: 'Total hours saved annually',
      accent: 'from-[#143151]/5 to-[#387E89]/5',
      iconBg: 'bg-[#143151]/10',
      iconColor: 'text-[#143151]',
    },
    {
      icon: CalendarCheck,
      value: roi.recoveredAppts.toLocaleString(),
      label: 'Recovered appointments / year',
      accent: 'from-[#387E89]/5 to-[#5192AE]/5',
      iconBg: 'bg-[#387E89]/10',
      iconColor: 'text-[#387E89]',
    },
  ];

  const sliders = [
    { label: 'Calls per day', value: callsPerDay, setter: setCallsPerDay, min: 10, max: 200, step: 5 },
    { label: 'Number of clinicians', value: clinicians, setter: setClinicians, min: 1, max: 30, step: 1 },
    { label: 'Average call duration (minutes)', value: avgCallDuration, setter: setAvgCallDuration, min: 1, max: 10, step: 1 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
      {/* Left: Sliders */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#143151] mb-2">Adjust for your practice</h3>
        <p className="text-sm text-gray-500 mb-8">
          Move the sliders to match your clinic. The calculator updates in real time.
        </p>

        <div className="space-y-8">
          {sliders.map((s) => (
            <div key={s.label} className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-gray-700">{s.label}</span>
                <span className="text-lg font-bold text-[#143151]">{s.value}</span>
              </div>
              <Slider
                value={[s.value]}
                onValueChange={(v) => s.setter(v[0])}
                min={s.min}
                max={s.max}
                step={s.step}
                className="w-full [&_[role=slider]]:bg-[#387E89] [&_[role=slider]]:border-[#387E89] [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-md"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>{s.min}</span>
                <span>{s.max}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional convincing factors */}
        <div className="mt-10 pt-8 border-t border-gray-100 space-y-4">
          <h4 className="text-sm font-semibold text-[#143151] uppercase tracking-wider">How we calculate this</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2.5">
              <PhoneCall className="w-4 h-4 mt-0.5 text-[#387E89] shrink-0" />
              <span>BRAVO automates <strong className="text-[#143151]">75% of routine calls</strong> — scheduling, refills, follow-ups, and intake.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Users className="w-4 h-4 mt-0.5 text-[#387E89] shrink-0" />
              <span>Staff cost based on <strong className="text-[#143151]">$22/hr</strong> national average for medical receptionists (BLS 2024).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CalendarCheck className="w-4 h-4 mt-0.5 text-[#387E89] shrink-0" />
              <span>Practices see a <strong className="text-[#143151]">40% reduction in no-shows</strong> with automated reminders & follow-ups.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <DollarSign className="w-4 h-4 mt-0.5 text-[#387E89] shrink-0" />
              <span>Each recovered appointment worth <strong className="text-[#143151]">~$150</strong> in average revenue.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right: Result Cards */}
      <div className="space-y-4 lg:sticky lg:top-8">
        {resultCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl bg-gradient-to-br ${card.accent} border border-gray-100 p-5 sm:p-6 overflow-hidden`}
          >
            {/* Watermark icon */}
            <card.icon className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 text-gray-200/60 pointer-events-none" strokeWidth={1} />
            <div className="relative flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <div>
                <motion.p
                  key={card.value}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143151]"
                >
                  {card.value}
                </motion.p>
                <p className="text-sm text-gray-500 mt-0.5">{card.label}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* FTE callout */}
        <div className="rounded-2xl bg-gradient-to-r from-[#143151] to-[#387E89] p-5 sm:p-6 text-white mt-2">
          <p className="text-sm text-white/70 mb-1">That's equivalent to</p>
          <p className="text-2xl sm:text-3xl font-bold">
            {roi.fteFraction.toFixed(1)} full-time staff
          </p>
          <p className="text-sm text-white/60 mt-1">
            worth of call-handling capacity — without hiring anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
