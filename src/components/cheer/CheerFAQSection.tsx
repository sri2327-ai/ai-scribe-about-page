import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How quickly can I get started?',
    a: 'You can be up and running with CHEER in minutes. Sign up, share your room link, and start seeing patients the same day — no downloads or installations required for you or your patients.',
  },
  {
    q: 'How does CHEER fit into day-to-day clinical workflows?',
    a: 'CHEER mirrors your in-office flow: invite, check-in, queue, and consult. It integrates seamlessly with S10.AI products like CRUSH (AI Scribe) and BRAVO (AI Receptionist), so documentation, scheduling, and front-office tasks happen alongside the visit.',
  },
  {
    q: 'Can providers manage multiple patients or back-to-back visits?',
    a: 'Yes. CHEER supports continuous, back-to-back visits with full visibility into your patient queue. Providers can move between patients without ever leaving the platform — keeping throughput high and downtime low.',
  },
  {
    q: 'Is CHEER a good fit for my practice size and structure?',
    a: 'CHEER works for solo providers, group practices, and large healthcare organizations. Admins can manage multiple providers under one practice, apply branding, and scale usage as patient volume grows.',
  },
  {
    q: 'What devices and browsers does CHEER support?',
    a: 'CHEER works on any modern device — desktop, laptop, tablet, or smartphone — directly in the browser. No app install required for patients, ever.',
  },
  {
    q: 'Is CHEER secure and compliant?',
    a: 'Absolutely. CHEER is HIPAA, GDPR, PHIPA/PIPEDA, and HITECH compliant, with end-to-end encrypted video and secure data handling built in.',
  },
];

export const CheerFAQSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full border-t border-black/10">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-black/10"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-black hover:no-underline py-5 md:py-6 hover:text-[#387E89] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-black/70 leading-relaxed pb-5 md:pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
