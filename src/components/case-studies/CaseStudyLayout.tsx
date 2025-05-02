
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '@/components/ui/optimized-image';
import { ChevronLeft } from 'lucide-react';
import styles from '@/styles/casecontentpage.module.scss';

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  image?: string;
  customIllustration?: React.ReactNode;
  children: React.ReactNode;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ 
  title, 
  description, 
  image, 
  customIllustration,
  children 
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50 pt-24">
      <div className={styles.casestudycontainer}>
        <button
          onClick={() => navigate('/resources/casestudies')}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-gray-700 hover:text-blue-700 transition-colors"
        >
          <ChevronLeft size={18} /> Back to all case studies
        </button>

        <div className={styles.bannerCard}>
          <div className={styles.bannerContent}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          <div className={styles.bannerImage}>
            {customIllustration ? (
              customIllustration
            ) : (
              image && (
                <OptimizedImage
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              )
            )}
          </div>
        </div>

        <div className="my-12">
          {children}
        </div>
      </div>
    </div>
  );
};
