import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Square, Volume2, Calendar, MessageSquare } from 'lucide-react';

interface AudioDemoProps {
  title: string;
  description: string;
  icon: React.ElementType;
  transcript: { speaker: 'bravo' | 'caller'; text: string }[];
}

const AudioDemoCard = memo(({ title, description, icon: Icon, transcript }: AudioDemoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const [progress, setProgress] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lineIndexRef = useRef(0);
  const isCancelledRef = useRef(false);

  const stopSpeaking = useCallback(() => {
    isCancelledRef.current = true;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentLine(-1);
    setProgress(0);
    lineIndexRef.current = 0;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakLine = useCallback((index: number) => {
    if (isCancelledRef.current || index >= transcript.length) {
      setIsPlaying(false);
      setCurrentLine(-1);
      setProgress(100);
      return;
    }

    const line = transcript[index];
    const utterance = new SpeechSynthesisUtterance(line.text);
    utteranceRef.current = utterance;

    // Different voice characteristics for BRAVO vs caller
    utterance.rate = line.speaker === 'bravo' ? 1.0 : 0.95;
    utterance.pitch = line.speaker === 'bravo' ? 1.1 : 0.9;

    // Try to pick different voices
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
      if (!isCancelledRef.current) {
        speakLine(index + 1);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled') {
        console.error('Speech error:', e.error);
        setIsPlaying(false);
      }
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
      // Ensure voices are loaded
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => speakLine(0);
      } else {
        speakLine(0);
      }
    }
  }, [isPlaying, speakLine, stopSpeaking]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-1 min-w-[300px]"
    >
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden h-full">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#143151]/10 to-[#387E89]/10">
              <Icon className="w-5 h-5 text-[#387E89]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>

        {/* Audio Player Controls */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#143151]/[0.03] to-[#387E89]/[0.03]">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-gray-400">
                  {isPlaying ? `Line ${currentLine + 1} of ${transcript.length}` : 'Click to listen'}
                </span>
                <span className="text-xs text-gray-400">
                  🔊 Browser TTS
                </span>
              </div>
            </div>
            {isPlaying && (
              <button onClick={stopSpeaking} className="p-2 text-gray-400 hover:text-gray-600">
                <Square className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Transcript */}
        <div className="px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Conversation Transcript</p>
          <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
            {transcript.map((line, i) => (
              <div
                key={i}
                className={`flex gap-2 p-2 rounded-lg transition-all duration-300 ${
                  currentLine === i ? 'bg-[#387E89]/10 scale-[1.01]' : ''
                }`}
              >
                <span className={`text-xs font-medium flex-shrink-0 mt-0.5 ${
                  line.speaker === 'bravo' ? 'text-[#387E89]' : 'text-gray-600'
                }`}>
                  {line.speaker === 'bravo' ? '🤖' : '👤'}
                </span>
                <div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                    line.speaker === 'bravo' ? 'text-[#387E89]' : 'text-gray-400'
                  }`}>
                    {line.speaker === 'bravo' ? 'BRAVO' : 'Caller'}
                  </span>
                  <p className={`text-sm leading-relaxed ${
                    line.speaker === 'bravo' ? 'text-gray-700' : 'text-gray-500'
                  }`}>
                    {line.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

AudioDemoCard.displayName = 'AudioDemoCard';

const schedulingTranscript = [
  { speaker: 'bravo' as const, text: "Good morning! Thank you for calling Greenfield Medical. How can I help you today?" },
  { speaker: 'caller' as const, text: "Hi, I'd like to schedule an appointment with Dr. Patel." },
  { speaker: 'bravo' as const, text: "Of course! I can see Dr. Patel has availability this Thursday at 10:30 AM or Friday at 2:00 PM. Which works better for you?" },
  { speaker: 'caller' as const, text: "Thursday at 10:30 works great." },
  { speaker: 'bravo' as const, text: "Perfect. I also see you mentioned chest tightness — I've flagged this as priority for Dr. Patel's review. Can you confirm your date of birth for verification?" },
  { speaker: 'caller' as const, text: "March 15, 1985." },
  { speaker: 'bravo' as const, text: "You're all set! Appointment confirmed for Thursday at 10:30 AM. You'll receive a confirmation text shortly." },
];

const feedbackTranscript = [
  { speaker: 'bravo' as const, text: "Hi Sarah, this is a follow-up call from Lakewood Family Practice. How are you feeling after your visit last week?" },
  { speaker: 'caller' as const, text: "Much better, thank you! The new medication is really helping." },
  { speaker: 'bravo' as const, text: "That's wonderful to hear! On a scale of 1 to 10, how would you rate your overall experience with Dr. Chen?" },
  { speaker: 'caller' as const, text: "I'd say a 9. She was very thorough." },
  { speaker: 'bravo' as const, text: "Great feedback — I'll pass that along. Dr. Chen recommended a follow-up in 4 weeks. I have openings on March 12th at 3 PM or March 14th at 11 AM. Would either work?" },
  { speaker: 'caller' as const, text: "March 14th at 11 AM, please." },
  { speaker: 'bravo' as const, text: "Done! Your follow-up is booked. We'll send a reminder 48 hours before. Is there anything else I can help with?" },
];

export const BravoAudioDemoSection = memo(() => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear BRAVO in Action
          </h2>
          <p className="text-lg text-gray-500">
            Listen to how BRAVO handles real clinic scenarios — from appointment scheduling and triage to patient feedback and follow-ups.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <AudioDemoCard
            title="Appointment Scheduling & Triage"
            description="BRAVO intelligently schedules appointments while identifying urgent symptoms for clinical triage."
            icon={Calendar}
            transcript={schedulingTranscript}
          />
          <AudioDemoCard
            title="Feedback & Follow-Up Booking"
            description="BRAVO collects patient feedback and seamlessly schedules follow-up appointments."
            icon={MessageSquare}
            transcript={feedbackTranscript}
          />
        </div>
      </div>
    </section>
  );
});

BravoAudioDemoSection.displayName = 'BravoAudioDemoSection';
