import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-scroll";
import { Button } from "./ui/button";

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link to={"home"} smooth offset={-120} duration={800}>
            <Button className="w-10 h-10 rounded-md mt-8 bg-marca1 hover:bg-marca1 hover:ring-3 hover:ring-marca1/50 hover:scale-105 transform transition duration-300 border-none text-white text-sm sm:text-base relative overflow-hidden">
              <ArrowUp className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
