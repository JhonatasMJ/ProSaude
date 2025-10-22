import { motion } from "framer-motion";
import { paths } from "@/utils/logoSvg";
export default function LogoSvg() { 
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
                    <motion.svg
                      width="100"
                      height="86"
                      viewBox="0 0 100 86"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-32 md:w-64 h-32 md:h-64"
                    >
                      {paths.map((path, index) => (
                        <motion.path
                          key={index}
                          d={path.d}
                            stroke={path.fill === "#E2E2E2" ? "#E2E2E2" : "#00184A"}
                          fill="transparent"
                          strokeWidth={1.5}
                          initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: 1,
                            fillOpacity: [0, 0, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                          style={{ fill: path.fill }}
                        />
                      ))}
                    </motion.svg>
                  </div>
    )
}