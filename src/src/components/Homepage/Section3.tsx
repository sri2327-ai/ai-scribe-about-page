
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Section3() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const containerRef = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ['start end', 'end center'],
  });

  const x1 = useTransform(scrollYProgress1, [0, 1], [-10, 10]);
  const rotate1 = useTransform(scrollYProgress1, [0, 1], [-5, 0]);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ['start end', 'end center'],
  });

  const x2 = useTransform(scrollYProgress2, [0, 1], [-10, 10]);
  const rotate2 = useTransform(scrollYProgress2, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ['start end', 'end center'],
  });

  const x3 = useTransform(scrollYProgress3, [0, 1], [-10, 10]);
  const rotate3 = useTransform(scrollYProgress3, [0, 1], [-5, 0]);

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: ref4,
    offset: ['start end', 'end center'],
  });

  const x4 = useTransform(scrollYProgress4, [0, 1], [-10, 10]);
  const rotate4 = useTransform(scrollYProgress4, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: ref5,
    offset: ['start end', 'end center'],
  });

  const x5 = useTransform(scrollYProgress5, [0, 1], [10, -10]);
  const rotate5 = useTransform(scrollYProgress5, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress6 } = useScroll({
    target: ref6,
    offset: ['start end', 'end center'],
  });

  const x6 = useTransform(scrollYProgress6, [0, 1], [10, -10]);
  const rotate6 = useTransform(scrollYProgress6, [0, 1], [-5, 0]);

  const { scrollYProgress: scrollYProgress7 } = useScroll({
    target: ref7,
    offset: ['start end', 'end center'],
  });

  const x7 = useTransform(scrollYProgress7, [0, 1], [10, -10]);
  const rotate7 = useTransform(scrollYProgress7, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress8 } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress8, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-16">
        How Bravo & CRUSH Transform Your Practice Together 
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col justify-center space-y-6 md:w-5/12">
          <motion.div
            ref={ref1}
            style={{
              x: x1,
              rotate: rotate1,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">1. Instant Call Handling</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">BRAVO answers patient inquiries, schedules appointments, and integrates with EHR, SIP, and PMS platforms.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref2}
            style={{
              x: x2,
              rotate: rotate2,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">2. Effortless Pre-Visit Workflow</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">Automates patient intake, insurance verification, and medical history updates for seamless visits.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref3}
            style={{
              x: x3,
              rotate: rotate3,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">3. Reduce No-Shows & Improve Engagement</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">Sends real-time confirmations, automated reminders, and follow-ups to maximize appointment adherence.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref4}
            style={{
              x: x4,
              rotate: rotate4,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">4. Real-Time AI Medical Scribe</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">CRUSH captures and transcribes physician-patient interactions, generating structured clinical notes instantly.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="hidden md:block px-2">
          <motion.div style={{ height: height}} className="bg-gradient-to-b from-teal-400 to-teal-600 w-1"></motion.div>
        </div>
        
        <div className="flex flex-col justify-center space-y-6 md:w-5/12">
          <motion.div
            ref={ref5}
            style={{
              x: x5,
              rotate: rotate5,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">5. Automate Repetitive Administrative Tasks</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">Streamlines prescription refills, referrals, lab orders, AI-powered clinical notes, and visit summaries to reduce staff workload.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref6}
            style={{
              x: x6,
              rotate: rotate6,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">6. Post-Visit Patient Support</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">BRAVO automates follow-ups, medication adherence, and preventive care reminders to improve patient outcomes.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref7}
            style={{
              x: x7,
              rotate: rotate7,
            }}
            className="my-2.5"
          >
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg text-white space-y-3">
              <h3 className="text-xl font-semibold">7. Accelerate Revenue Cycle Management</h3>
              <div className="flex items-center gap-4 py-3">
                <img
                  src="/circleIcon.png"
                  alt="circleIcon"
                  width="90"
                  height="90"
                  className="rounded-full"
                />
                <p className="text-lg">Enhances insurance verification, claim processing, and payment tracking for faster reimbursements and improved financial outcomes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
