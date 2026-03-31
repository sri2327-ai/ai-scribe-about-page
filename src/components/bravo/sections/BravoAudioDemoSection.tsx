import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, PhoneOutgoing, PhoneIncoming } from 'lucide-react';

interface AudioDemoProps {
  title: string;
  description: string;
  direction: 'inbound' | 'outbound';
  transcript: { speaker: 'bravo' | 'caller'; text: string }[];
}

const AudioDemoCard = memo(({ title, description, direction, transcript }: AudioDemoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(-1);
  const isCancelledRef = useRef(false);
  const lineIndexRef = useRef(0);

  const stopSpeaking = useCallback(() => {
    isCancelledRef.current = true;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentLine(-1);
    setProgress(0);
    lineIndexRef.current = 0;
  }, []);

  useEffect(() => {
    return () => { window.speechSynthesis.cancel(); };
  }, []);

  const speakLine = useCallback((index: number) => {
    if (isCancelledRef.current || index >= transcript.length) {
      setIsPlaying(false);
      setCurrentLine(-1);
      setProgress(100);
      setTimeout(() => setProgress(0), 1500);
      return;
    }

    const line = transcript[index];
    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.rate = line.speaker === 'bravo' ? 1.0 : 0.95;
    utterance.pitch = line.speaker === 'bravo' ? 1.1 : 0.9;

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 1) {
      const femaleVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Google US English'));
      const maleVoice = voices.find(v => v.name.includes('Male') || v.name.includes('Daniel') || v.name.includes('Google UK English Male'));
      utterance.voice = line.speaker === 'bravo' ? (femaleVoice || voices[0]) : (maleVoice || voices[1] || voices[0]);
    }

    setCurrentLine(index);
    lineIndexRef.current = index;
    setProgress(Math.round(((index + 1) / transcript.length) * 100));

    utterance.onend = () => {
      if (!isCancelledRef.current) speakLine(index + 1);
    };
    utterance.onerror = (e) => {
      if (e.error !== 'canceled') setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [transcript]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stopSpeaking();
    } else {
      isCancelledRef.current = false;
      setIsPlaying(true);
      setProgress(0);
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => speakLine(0);
      } else {
        speakLine(0);
      }
    }
  }, [isPlaying, speakLine, stopSpeaking]);

  const isOutbound = direction === 'outbound';
  const DirectionIcon = isOutbound ? PhoneOutgoing : PhoneIncoming;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        <div className={`h-1 w-full ${isOutbound ? 'bg-gradient-to-r from-[#143151] to-[#387E89]' : 'bg-gradient-to-r from-[#387E89] to-[#5192AE]'}`} />
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
              isOutbound ? 'bg-[#143151]/10 text-[#143151]' : 'bg-[#387E89]/10 text-[#387E89]'
            }`}>
              <DirectionIcon className="w-3 h-3" />
              {direction}
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 leading-snug">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3">{description}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 cursor-pointer ${
                isPlaying
                  ? 'bg-gray-900 text-white scale-95'
                  : 'bg-gradient-to-br from-[#143151] to-[#387E89] text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <div className="flex-1">
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isOutbound ? 'bg-gradient-to-r from-[#143151] to-[#387E89]' : 'bg-gradient-to-r from-[#387E89] to-[#5192AE]'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                {isPlaying ? 'Playing…' : 'Tap to listen'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

AudioDemoCard.displayName = 'AudioDemoCard';

// ── Transcripts ──

const prechartingTranscript = [
  { speaker: 'bravo' as const, text: "Hi, this is BRAVO calling from Greenfield Medical on behalf of Dr. Patel. I'm reaching out ahead of your appointment tomorrow at 10:30 AM." },
  { speaker: 'caller' as const, text: "Oh hi, yes I have that appointment." },
  { speaker: 'bravo' as const, text: "Great! I'd like to quickly go over a few things so Dr. Patel can be fully prepared. Have there been any changes to your medications since your last visit?" },
  { speaker: 'caller' as const, text: "Actually yes, my cardiologist added lisinopril about two weeks ago." },
  { speaker: 'bravo' as const, text: "Got it — lisinopril added two weeks ago. And are you experiencing any new symptoms or concerns you'd like Dr. Patel to address?" },
  { speaker: 'caller' as const, text: "I've been having some occasional dizziness, especially when I stand up." },
  { speaker: 'bravo' as const, text: "Thank you for sharing that. I've noted the dizziness and the new medication for Dr. Patel's review. Your chart will be updated before your visit. See you tomorrow!" },
];

const followupTranscript = [
  { speaker: 'bravo' as const, text: "Hi Sarah, this is BRAVO calling from Lakewood Family Practice. I'm following up on your visit with Dr. Chen three days ago. How are you feeling?" },
  { speaker: 'caller' as const, text: "Much better actually. The new medication seems to be helping with the pain." },
  { speaker: 'bravo' as const, text: "That's wonderful to hear! Any side effects from the medication — nausea, drowsiness, anything like that?" },
  { speaker: 'caller' as const, text: "A little drowsy the first day but that's gone now." },
  { speaker: 'bravo' as const, text: "Good, that's common and usually resolves quickly. Dr. Chen also wanted me to confirm — have you been able to schedule your physical therapy referral?" },
  { speaker: 'caller' as const, text: "Not yet, I lost the referral details." },
  { speaker: 'bravo' as const, text: "No problem! I'll have our care team resend the referral information to your email and phone. Dr. Chen recommended starting within the next two weeks for the best outcome." },
  { speaker: 'caller' as const, text: "That would be great, thank you." },
  { speaker: 'bravo' as const, text: "Done! You'll receive it shortly. Your follow-up with Dr. Chen is in four weeks. We'll send a reminder beforehand. Take care, Sarah!" },
];

const schedulingTranscript = [
  { speaker: 'bravo' as const, text: "Good morning! Thank you for calling Greenfield Medical. How can I help you today?" },
  { speaker: 'caller' as const, text: "Hi, I'd like to schedule an appointment with Dr. Patel." },
  { speaker: 'bravo' as const, text: "Of course! I can see Dr. Patel has availability this Thursday at 10:30 AM or Friday at 2:00 PM. Which works better for you?" },
  { speaker: 'caller' as const, text: "Thursday at 10:30 works great." },
  { speaker: 'bravo' as const, text: "I also noticed you mentioned some chest tightness — I've flagged this as priority for Dr. Patel's review. Can you confirm your date of birth?" },
  { speaker: 'caller' as const, text: "March 15, 1985." },
  { speaker: 'bravo' as const, text: "You're all set! Appointment confirmed for Thursday at 10:30 AM. You'll receive a confirmation text shortly." },
];

const medicationRefillTranscript = [
  { speaker: 'bravo' as const, text: "Thank you for calling Lakewood Family Practice. How can I assist you?" },
  { speaker: 'caller' as const, text: "Hi, I need to refill my blood pressure medication — amlodipine." },
  { speaker: 'bravo' as const, text: "I can help with that. Can I get your name and date of birth for verification?" },
  { speaker: 'caller' as const, text: "James Rivera, July 22, 1978." },
  { speaker: 'bravo' as const, text: "Thank you, James. I see your amlodipine 5mg prescription. It looks like you're due for a refill. I'll send this request to Dr. Chen for approval." },
  { speaker: 'caller' as const, text: "How long will that take?" },
  { speaker: 'bravo' as const, text: "Typically within a few hours. Once approved, it'll be sent directly to your pharmacy on file — CVS on Oak Street. You'll get a text confirmation." },
  { speaker: 'caller' as const, text: "Perfect, that's my pharmacy. Thanks!" },
  { speaker: 'bravo' as const, text: "You're welcome, James! Is there anything else I can help with today?" },
];

export const BravoAudioDemoSection = memo(() => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#143151]/10 text-[#143151] text-xs sm:text-sm font-semibold mb-2">
            🎧 Live Call Samples
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            This Is What Your Patients Will Hear
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Real conversations. Hit play and hear how BRAVO handles scheduling, refills, pre-visit prep, and follow-ups.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PhoneOutgoing className="w-4 h-4 text-[#143151]" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#143151]">Outbound</h3>
            </div>
            <div className="space-y-4">
              <AudioDemoCard title="Pre-Charting Call" description="Gathers medication changes & symptoms before the visit." direction="outbound" transcript={prechartingTranscript} />
              <AudioDemoCard title="Post-Visit Follow-Up" description="Checks recovery, side effects, and coordinates referrals." direction="outbound" transcript={followupTranscript} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PhoneIncoming className="w-4 h-4 text-[#387E89]" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#387E89]">Inbound</h3>
            </div>
            <div className="space-y-4">
              <AudioDemoCard title="Appointment Scheduling" description="Checks availability, flags urgency, and confirms bookings." direction="inbound" transcript={schedulingTranscript} />
              <AudioDemoCard title="Medication Refill Request" description="Verifies identity and routes refill requests for approval." direction="inbound" transcript={medicationRefillTranscript} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BravoAudioDemoSection.displayName = 'BravoAudioDemoSection';
