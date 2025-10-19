import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'motion/react'

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

      const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
    
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
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-10 w-10 rounded-md bg-marca1 shadow-lg hover:bg-marca1/60"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
    )
}