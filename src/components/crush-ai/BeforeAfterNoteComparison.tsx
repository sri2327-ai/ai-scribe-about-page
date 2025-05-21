import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const FeatureTooltip = styled.div`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const FeatureContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${FeatureTooltip} {
    opacity: 1;
    visibility: visible;
  }
`;

const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ExampleSelector = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

const NotesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const NoteCard = styled.div`
  width: 45%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const NoteTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
`;

const NoteContent = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: #555;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
`;

const CopyButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    background-color: #367c39;
  }
`;

export const BeforeAfterNoteComparison = () => {
  const [selectedExample, setSelectedExample] = useState('family-medicine');
  const [copyTooltip, setCopyTooltip] = useState('');
  const copyTimeout = useRef<number | null>(null);

  const handleExampleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExample(event.target.value);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyTooltip('Copied!');
      if (copyTimeout.current) {
        clearTimeout(copyTimeout.current);
      }
      copyTimeout.current = window.setTimeout(() => {
        setCopyTooltip('');
      }, 2000);
    });
  };

  useEffect(() => {
    return () => {
      if (copyTimeout.current) {
        clearTimeout(copyTimeout.current);
      }
    };
  }, []);

  // Define the examples we'll be showing with specialty-specific content
  const examples = [
    { 
      id: 'family-medicine', 
      label: 'Family Medicine',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 58",
        chiefComplaint: "Patient presents with fatigue and persistent cough.",
        exam: "Vitals stable. Lungs clear. Throat slightly red.",
        assessment: "Possible upper respiratory infection.",
        plan: "Prescribed rest and fluids. Follow-up in one week if symptoms persist."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 58\nInsurance: [REDACTED]\nLast Visit: 3 months ago",
        chiefComplaint: "Patient reports improved energy levels and reduced cough.",
        exam: "Vitals normal. Lungs clear. Throat normal.",
        assessment: "Upper respiratory infection resolved.",
        plan: "Advised to continue healthy lifestyle. No further follow-up needed."
      }
    },
    { 
      id: 'chiropractic', 
      label: 'Chiropractic',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 42",
        chiefComplaint: "Patient presents with lower back pain after lifting heavy objects.",
        exam: "Limited range of motion in lumbar spine. Muscle spasm noted.",
        assessment: "Lumbar strain.",
        plan: "Chiropractic adjustments and muscle relaxants prescribed."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 42\nInsurance: [REDACTED]\nVisit #: 5",
        chiefComplaint: "Patient reports significant reduction in lower back pain.",
        exam: "Improved range of motion. Reduced muscle spasm.",
        assessment: "Lumbar strain improving.",
        plan: "Continue chiropractic adjustments. Advised on proper lifting techniques."
      }
    },
    { 
      id: 'functional-medicine', 
      label: 'Functional Medicine',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 35",
        chiefComplaint: "Patient presents with chronic fatigue and digestive issues.",
        exam: "Comprehensive metabolic panel ordered. Gut microbiome analysis recommended.",
        assessment: "Possible hormonal imbalance and gut dysbiosis.",
        plan: "Dietary modifications and supplements prescribed. Further testing pending."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 35\nInsurance: [REDACTED]\nInitial Consult: [REDACTED]",
        chiefComplaint: "Patient reports improved energy and digestion.",
        exam: "Metabolic panel shows improved hormone levels. Gut microbiome analysis reveals balanced flora.",
        assessment: "Hormonal imbalance and gut dysbiosis resolved.",
        plan: "Continue dietary and supplement regimen. Monitor symptoms."
      }
    },
    { 
      id: 'ent', 
      label: 'ENT',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 49",
        chiefComplaint: "Patient presents with chronic sinusitis and nasal congestion.",
        exam: "Nasal endoscopy reveals inflamed sinuses. CT scan ordered.",
        assessment: "Chronic sinusitis.",
        plan: "Prescribed nasal corticosteroids and antibiotics. Surgery may be considered."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 49\nInsurance: [REDACTED]\nReferral: [REDACTED]",
        chiefComplaint: "Patient reports reduced nasal congestion and sinus pressure.",
        exam: "Nasal endoscopy shows reduced inflammation. CT scan indicates improved sinus drainage.",
        assessment: "Chronic sinusitis improving.",
        plan: "Continue nasal corticosteroids. Monitor for recurrence."
      }
    },
    { 
      id: 'neurology', 
      label: 'Neurology',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 61",
        chiefComplaint: "Patient presents with chronic migraines and visual disturbances.",
        exam: "Neurological exam normal. MRI of brain ordered.",
        assessment: "Migraine with aura.",
        plan: "Prescribed migraine medication and lifestyle modifications."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 61\nInsurance: [REDACTED]\nPrimary Care: [REDACTED]",
        chiefComplaint: "Patient reports reduced frequency and intensity of migraines.",
        exam: "MRI of brain normal. Neurological exam stable.",
        assessment: "Migraine with aura controlled.",
        plan: "Continue migraine medication. Monitor for side effects."
      }
    },
    { 
      id: 'pediatrics', 
      label: 'Pediatrics',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 7",
        chiefComplaint: "Patient presents with fever and sore throat.",
        exam: "Throat red with white patches. Rapid strep test ordered.",
        assessment: "Possible streptococcal pharyngitis.",
        plan: "Prescribed antibiotics if strep test positive."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 7\nParent: [REDACTED]\nInsurance: [REDACTED]",
        chiefComplaint: "Patient reports improved symptoms after antibiotic treatment.",
        exam: "Throat clear. No fever.",
        assessment: "Streptococcal pharyngitis resolved.",
        plan: "Complete antibiotic course. Monitor for recurrence."
      }
    },
    { 
      id: 'ophthalmology', 
      label: 'Ophthalmology',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 72",
        chiefComplaint: "Patient presents with blurred vision and eye strain.",
        exam: "Visual acuity reduced. Cataracts noted. Intraocular pressure normal.",
        assessment: "Cataracts.",
        plan: "Discussed cataract surgery options."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 72\nInsurance: [REDACTED]\nLast Exam: [REDACTED]",
        chiefComplaint: "Patient reports improved vision after cataract surgery.",
        exam: "Visual acuity improved. Clear lens implant.",
        assessment: "Post-cataract surgery success.",
        plan: "Prescribed post-operative eye drops. Follow-up in one month."
      }
    },
    { 
      id: 'gastroenterology', 
      label: 'Gastroenterology',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 55",
        chiefComplaint: "Patient presents with abdominal pain and bloating.",
        exam: "Abdomen tender to palpation. Colonoscopy scheduled.",
        assessment: "Possible irritable bowel syndrome.",
        plan: "Dietary modifications and antispasmodics prescribed."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: F\nAGE: 55\nInsurance: [REDACTED]\nReferring Provider: [REDACTED]",
        chiefComplaint: "Patient reports reduced abdominal pain and bloating.",
        exam: "Colonoscopy normal. Biopsies taken.",
        assessment: "Irritable bowel syndrome confirmed.",
        plan: "Continue dietary management and antispasmodics. Probiotics recommended."
      }
    },
    { 
      id: 'podiatry', 
      label: 'Podiatry',
      before: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 68",
        chiefComplaint: "Patient presents with foot pain and ingrown toenail.",
        exam: "Ingrown toenail noted. Inflammation around nail bed.",
        assessment: "Ingrown toenail.",
        plan: "Scheduled toenail removal."
      },
      after: {
        demographics: "PATIENT: Patient ID: [REDACTED]\nDOB: [REDACTED]\nMRN: [REDACTED]\nGENDER: M\nAGE: 68\nInsurance: [REDACTED]\nDiabetic Status: Type 2, 10 years",
        chiefComplaint: "Patient reports relief from foot pain after toenail removal.",
        exam: "Nail bed healing well. No signs of infection.",
        assessment: "Ingrown toenail resolved.",
        plan: "Advised on proper foot care. Monitor for recurrence."
      }
    }
  ];

  const currentExample = examples.find(ex => ex.id === selectedExample);

  if (!currentExample) {
    return <div>Example not found</div>;
  }

  return (
    <ComparisonContainer>
      <ExampleSelector value={selectedExample} onChange={handleExampleChange}>
        {examples.map(example => (
          <option key={example.id} value={example.id}>{example.label}</option>
        ))}
      </ExampleSelector>
      <NotesContainer>
        <NoteCard>
          <NoteTitle>Before</NoteTitle>
          <NoteContent>{currentExample.before.demographics}</NoteContent>
          <NoteContent>{`Chief Complaint: ${currentExample.before.chiefComplaint}`}</NoteContent>
          <NoteContent>{`Exam: ${currentExample.before.exam}`}</NoteContent>
          <NoteContent>{`Assessment: ${currentExample.before.assessment}`}</NoteContent>
          <NoteContent>{`Plan: ${currentExample.before.plan}`}</NoteContent>
          <CopyToClipboard text={JSON.stringify(currentExample.before, null, 2)}>
            <CopyButton>
              {copyTooltip === 'Copied!' ? 'Copied!' : 'Copy Before Note'}
            </CopyButton>
          </CopyToClipboard>
        </NoteCard>
        <NoteCard>
          <NoteTitle>After</NoteTitle>
          <NoteContent>{currentExample.after.demographics}</NoteContent>
           <NoteContent>{`Chief Complaint: ${currentExample.after.chiefComplaint}`}</NoteContent>
          <NoteContent>{`Exam: ${currentExample.after.exam}`}</NoteContent>
          <NoteContent>{`Assessment: ${currentExample.after.assessment}`}</NoteContent>
          <NoteContent>{`Plan: ${currentExample.after.plan}`}</NoteContent>
          <CopyToClipboard text={JSON.stringify(currentExample.after, null, 2)}>
            <CopyButton>
              {copyTooltip === 'Copied!' ? 'Copied!' : 'Copy After Note'}
            </CopyButton>
          </CopyToClipboard>
        </NoteCard>
      </NotesContainer>
    </ComparisonContainer>
  );
};
