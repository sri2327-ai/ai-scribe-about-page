
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Alice Johnson",
    title: "Cardiologist",
    quote: "This platform completely transformed how we operate. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. James Lee",
    title: "Neurologist",
    quote: "Reliable, scalable, and beautifully designed. It just works.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Maria Gomez",
    title: "Pediatrician",
    quote: "The support team is phenomenal. I felt like a priority customer from day one.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Tommy Nguyen",
    title: "Radiologist",
    quote: "We doubled our efficiency in weeks. A game-changer for our workflow.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Oncologist",
    quote: "Reduced our administrative burden by 40%. Now I can focus more on patient care.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Dr. Michael Davis",
    title: "Surgeon",
    quote: "The AI assistance is remarkable. Accurate and intuitive - exactly what we needed.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1] };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

const TestimonialCarousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (card: Testimonial, index: number) => void;
    controls: any;
    cards: Testimonial[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 900 : 1800;
    const faceCount = cards.length;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`testimonial-${i}`}
              className="absolute h-full origin-center w-[280px] md:w-[300px] max-w-full p-2 md:p-4"
              style={{
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(card, i)}
            >
              <div className="rounded-xl bg-black border border-gray-800 p-4 md:p-6 flex flex-col items-center text-center space-y-3 md:space-y-4 h-full justify-center shadow-xl hover:border-gray-700 transition-all duration-300">
                <img
                  src={card.avatar}
                  alt={card.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-800"
                />
                <blockquote className="italic text-xs md:text-sm text-gray-300">
                  "{card.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">{card.name}</p>
                  <p className="text-[10px] md:text-xs text-gray-500">{card.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

function ThreeDTestimonialCarousel() {
  const [activeCard, setActiveCard] = useState<Testimonial | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(() => testimonials, []);

  const handleClick = (card: Testimonial, index: number) => {
    setActiveCard(card);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveCard(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`testimonial-${activeCard.name}`}
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 md:p-8"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div
              className="bg-black border border-gray-800 rounded-xl p-6 md:p-8 text-center space-y-4 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeCard.avatar}
                alt={activeCard.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto border border-gray-800"
              />
              <p className="text-base md:text-lg italic text-gray-300">"{activeCard.quote}"</p>
              <div>
                <p className="font-semibold text-white">{activeCard.name}</p>
                <p className="text-xs md:text-sm text-gray-500">{activeCard.title}</p>
              </div>
              <button 
                className="mt-4 text-xs border border-gray-700 px-4 py-2 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                onClick={handleClose}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full overflow-hidden">
        <TestimonialCarousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}

const TrustedBy = () => {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Trusted by 1000+ Clinicians</h2>
          <div className="w-16 md:w-20 h-[1px] bg-gray-700 mx-auto"></div>
        </motion.div>
        
        <ThreeDTestimonialCarousel />
      </div>
    </section>
  );
};

export default TrustedBy;
