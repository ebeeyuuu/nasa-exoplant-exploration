import { motion, AnimatePresence } from "framer-motion";
import React, { ReactElement, useCallback, useRef, useState } from "react";

// Define the type for slide state with specific properties
interface SlideState {
  content?: string; // Example property
  isActive?: boolean; // Example property
  // Add more properties as needed
}

interface SlidePresentationProps {
  numSlides: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  children: ReactElement | ReactElement[];
}

const SlidePresentation: React.FC<SlidePresentationProps> = ({
  numSlides,
  currentIndex,
  setCurrentIndex,
  children,
}) => {
  const [direction, setDirection] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]);
  const slideStates = useRef<Record<number, SlideState>>({}); // Update type here

  const getSlideContent = useCallback(
    (index: number) => {
      const childArray = React.Children.toArray(children);
      return index < childArray.length ? childArray[index] : null;
    },
    [children],
  );

  // Update the type for the state parameter
  const setSlideState = useCallback((index: number, state: SlideState) => {
    slideStates.current[index] = state;
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      if (!loadedSlides.includes(index)) {
        setLoadedSlides((prev) => [...prev, index]);
      }
    }
  };

  const nextSlide = () => {
    if (currentIndex < numSlides - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 2000 : -2000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 2000 : -2000,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-zinc-950 overflow-hidden w-full h-full flex flex-col justify-center items-center max-[1000px]:ml-0 px-[15px] max-[700px]:px-[10px] max-[700px]:py-[15px] relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute justify-center items-center flex w-full h-full"
        >
          {React.isValidElement(getSlideContent(currentIndex)) ? (
            React.cloneElement(getSlideContent(currentIndex) as ReactElement, {
              slideState: slideStates.current[currentIndex] || {},
              setSlideState: (state: SlideState) =>
                setSlideState(currentIndex, state),
              onNextSlide: nextSlide,
              onPrevSlide: prevSlide,
            })
          ) : (
            <div>Blank Slide</div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlidePresentation;
