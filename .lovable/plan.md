
# Segregate Popular Features by Product

## What Changes
The "Popular Features" column in the Solutions dropdown menu currently shows all 12 features in a single flat list. This update will organize them into two clearly labeled groups:

**AI Medical Scribe (CRUSH)**
- Transcribe & Dictate
- Contextual Reasoning
- Templates
- Customisation
- Pre-Charting
- Coding
- Workflows: Prescriptions & Lab Orders
- Universal EHR Integration

**AI Phone Agent (BRAVO)**
- Calls
- Chat
- Email
- Universal App Integrations

## How It Will Look
Each group will have a small subheading label (e.g., "AI Medical Scribe" and "AI Phone Agent") styled as a subtle category divider within the existing scrollable Popular Features column. The feature items themselves remain unchanged.

## Technical Details

**File:** `src/components/landing/AnimatedHeader.tsx`

1. Restructure the `popularFeatures` data (lines 170-231) into two separate arrays: `scribeFeatures` and `phoneAgentFeatures` (or add a `category` field to each item).

2. Update the Popular Features column rendering (lines 589-618) to display two sections with sub-headers:
   - A "AI Medical Scribe" label followed by scribe-related features
   - A "AI Phone Agent" label followed by phone-agent-related features
   - Each label styled as a small, bold, uppercase text with a subtle bottom border, matching the existing design language
