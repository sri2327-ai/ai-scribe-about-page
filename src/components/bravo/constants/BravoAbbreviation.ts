
import { Calendar, Bell, Workflow, ShieldCheck, ClipboardCheck } from "lucide-react";

export const BravoAbbreviation = [
  {
    letter: "B",
    title: "Booking & Scheduling",
    description: "Smart appointments & follow-ups",
    icon: Calendar,
    tooltipPosition: 'top' as const
  },
  {
    letter: "R",
    title: "Reminders & Notifications",
    description: "Reduce no-shows with automated alerts",
    icon: Bell,
    tooltipPosition: 'top' as const
  },
  {
    letter: "A",
    title: "Automated Triage",
    description: "Prioritize urgent cases instantly",
    icon: Workflow,
    tooltipPosition: 'top' as const
  },
  {
    letter: "V",
    title: "Verification & Identity",
    description: "Secure patient & insurance checks",
    icon: ShieldCheck,
    tooltipPosition: 'top' as const
  },
  {
    letter: "O",
    title: "Onboarding & Pre-Visit",
    description: "Streamlined intake & clinical summaries",
    icon: ClipboardCheck,
    tooltipPosition: 'top' as const
  },
];
