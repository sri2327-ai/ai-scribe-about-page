import React, { memo, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Calendar, MessageSquare } from 'lucide-react';

interface AudioDemoProps {
  title: string;
  description: string;
  icon: React.ElementType;
  transcript: string[];
  audioSrc?: string;
}

const AudioDemoCard = memo(({ title, description, icon: Icon, transcript, audioSrc }: AudioDemoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      if (progressInterval.current) clearInterval(progressInterval.current);
    } else {
      audioRef.current.play();
      progressInterval.current = window.setInterval(() => {
        if (audioRef.current) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
      }, 100);
    }
    setIsPlaying(!isPlaying);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (progressInterval.current) clearInterval(progressInterval.current);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const hasAudio = !!audioSrc;

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

        {/* Audio Player */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#143151]/[0.03] to-[#387E89]/[0.03]">
          {hasAudio && (
            <audio
              ref={audioRef}
              src={audioSrc}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              preload="metadata"
            />
          )}
          <div className="flex items-center gap-4">
            <button
              onClick={hasAudio ? togglePlay : undefined}
              disabled={!hasAudio}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                hasAudio
                  ? 'bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:shadow-lg hover:scale-105 cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-gray-400">
                  {hasAudio && audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}
                </span>
                <span className="text-xs text-gray-400">
                  {duration > 0 ? formatTime(duration) : hasAudio ? '...' : 'Audio coming soon'}
                </span>
              </div>
            </div>
            <Volume2 className="w-4 h-4 text-gray-300 flex-shrink-0" />
          </div>
        </div>

        {/* Transcript Preview */}
        <div className="px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Sample Transcript</p>
          <div className="space-y-2.5 max-h-[200px] overflow-y-auto pr-1">
            {transcript.map((line, i) => {
              const isAgent = line.startsWith('BRAVO:');
              const isPatient = line.startsWith('Patient:') || line.startsWith('Caller:');
              return (
                <div key={i} className={`flex gap-2 ${isAgent ? '' : ''}`}>
                  <span className={`text-xs font-medium flex-shrink-0 mt-0.5 ${
                    isAgent ? 'text-[#387E89]' : isPatient ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {isAgent ? '🤖' : isPatient ? '👤' : ''}
                  </span>
                  <p className={`text-sm leading-relaxed ${
                    isAgent ? 'text-gray-700' : 'text-gray-500'
                  }`}>
                    {line.replace(/^(BRAVO:|Patient:|Caller:)\s*/, '')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

AudioDemoCard.displayName = 'AudioDemoCard';

const schedulingTranscript = [
  "BRAVO: Good morning! Thank you for calling Greenfield Medical. How can I help you today?",
  "Caller: Hi, I'd like to schedule an appointment with Dr. Patel.",
  "BRAVO: Of course! I can see Dr. Patel has availability this Thursday at 10:30 AM or Friday at 2:00 PM. Which works better for you?",
  "Caller: Thursday at 10:30 works great.",
  "BRAVO: Perfect. I also see you mentioned chest tightness — I've flagged this as priority for Dr. Patel's review. Can you confirm your date of birth for verification?",
  "Caller: March 15, 1985.",
  "BRAVO: You're all set! Appointment confirmed for Thursday at 10:30 AM. You'll receive a confirmation text shortly.",
];

const feedbackTranscript = [
  "BRAVO: Hi Sarah, this is a follow-up call from Lakewood Family Practice. How are you feeling after your visit last week?",
  "Patient: Much better, thank you! The new medication is really helping.",
  "BRAVO: That's wonderful to hear! On a scale of 1 to 10, how would you rate your overall experience with Dr. Chen?",
  "Patient: I'd say a 9. She was very thorough.",
  "BRAVO: Great feedback — I'll pass that along. Dr. Chen recommended a follow-up in 4 weeks. I have openings on March 12th at 3 PM or March 14th at 11 AM. Would either work?",
  "Patient: March 14th at 11 AM, please.",
  "BRAVO: Done! Your follow-up is booked. We'll send a reminder 48 hours before. Is there anything else I can help with?",
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
