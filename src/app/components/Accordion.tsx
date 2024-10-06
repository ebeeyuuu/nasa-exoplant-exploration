import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Optional for animation, you can remove this if not needed

const Accordion = ({
  items,
}: {
  items: { title: string; content: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium w-4/5">{item.title}</span>
            <span className="transform text-lg font-bold rounded-full border border-white py-1 px-2.5 transition-transform duration-300 flex justify-center items-center">
              <span className="mt-[-2px]">
                {openIndex === index ? "−" : "+"}
              </span>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
